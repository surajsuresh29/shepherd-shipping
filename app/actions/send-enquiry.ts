"use server";

import { z } from "zod";
import { Resend } from "resend";

export interface EnquiryState {
  success: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    phone?: string[];
    company?: string[];
    turnstile?: string[];
    _form?: string[];
  };
  timestamp?: number;
}

const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address"),
  message: z
    .string()
    .trim()
    .min(5, "Please provide shipment details or a message (at least 5 characters)")
    .max(2000, "Message must not exceed 2000 characters"),
  company: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(50).optional(),
  serviceType: z.string().trim().optional(),
  expectedDate: z.string().trim().optional(),
  origin: z.string().trim().optional(),
  destination: z.string().trim().optional(),
  turnstileToken: z
    .string()
    .min(1, "Please complete the security verification challenge"),
});

export async function sendEnquiry(
  _prevState: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  // Extract and normalize values from FormData
  const rawData = {
    name: (formData.get("name") || formData.get("fullName") || "").toString(),
    email: (formData.get("email") || "").toString(),
    message: (
      formData.get("message") ||
      formData.get("details") ||
      ""
    ).toString(),
    company: (formData.get("company") || "").toString(),
    phone: (formData.get("phone") || "").toString(),
    serviceType: (
      formData.get("serviceType") ||
      formData.get("shipmentType") ||
      ""
    ).toString(),
    expectedDate: (formData.get("expectedDate") || "").toString(),
    origin: (formData.get("origin") || "").toString(),
    destination: (formData.get("destination") || "").toString(),
    turnstileToken: (
      formData.get("turnstileToken") ||
      formData.get("cf-turnstile-response") ||
      ""
    ).toString(),
  };

  // 1. Zod schema validation
  const validation = enquirySchema.safeParse(rawData);
  if (!validation.success) {
    const fieldErrors = validation.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Please correct the highlighted fields before submitting.",
      errors: {
        name: fieldErrors.name,
        email: fieldErrors.email,
        message: fieldErrors.message,
        phone: fieldErrors.phone,
        company: fieldErrors.company,
        turnstile: fieldErrors.turnstileToken,
      },
      timestamp: Date.now(),
    };
  }

  const data = validation.data;

  // 2. Cloudflare Turnstile token verification
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

  if (!turnstileSecret) {
    console.error("Configuration error: TURNSTILE_SECRET_KEY is missing.");
    return {
      success: false,
      message: "Server configuration error: Turnstile secret key is not set.",
      errors: {
        _form: ["Turnstile security check is not configured on the server."],
      },
      timestamp: Date.now(),
    };
  }

  try {
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: data.turnstileToken,
        }),
      }
    );

    const verifyResult = (await verifyRes.json()) as {
      success: boolean;
      "error-codes"?: string[];
    };

    if (!verifyResult.success) {
      console.warn("Turnstile siteverify failed:", verifyResult["error-codes"]);
      return {
        success: false,
        message: "Spam / bot protection check failed. Please re-verify.",
        errors: {
          turnstile: [
            "Security verification failed or expired. Please check the box again.",
          ],
        },
        timestamp: Date.now(),
      };
    }
  } catch (error) {
    console.error("Turnstile request exception:", error);
    return {
      success: false,
      message: "Unable to verify security token. Please check your network connection.",
      errors: {
        _form: ["Failed to connect to Cloudflare verification service."],
      },
      timestamp: Date.now(),
    };
  }

  // 3. Resend email dispatch
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("Configuration error: RESEND_API_KEY is missing.");
    return {
      success: false,
      message: "Server configuration error: Resend API key is not configured.",
      errors: {
        _form: ["Email service is currently unconfigured."],
      },
      timestamp: Date.now(),
    };
  }

  const resend = new Resend(resendApiKey);
  const toEmail = process.env.CONTACT_EMAIL_TO || "marketing@yourdomain.com";
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "Shepherd Logistics <onboarding@resend.dev>";

  try {
    const { error: sendError } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject: `New Cargo Enquiry: ${data.serviceType || "Freight Service"} — ${data.name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #184478; padding-bottom: 16px; margin-bottom: 24px;">
            <h2 style="color: #0F2C4E; margin: 0; font-size: 20px;">Shepherd Shipping — Cargo Enquiry</h2>
            <p style="color: #64748b; margin: 4px 0 0 0; font-size: 13px;">Received via website contact form</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tbody>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600; width: 140px;">Full Name:</td>
                <td style="padding: 10px 0; color: #0F2C4E; font-size: 14px; font-weight: 500;">${data.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600;">Email:</td>
                <td style="padding: 10px 0; color: #0F2C4E; font-size: 14px;"><a href="mailto:${data.email}" style="color: #184478;">${data.email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600;">Phone:</td>
                <td style="padding: 10px 0; color: #0F2C4E; font-size: 14px;">${data.phone || "—"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600;">Company:</td>
                <td style="padding: 10px 0; color: #0F2C4E; font-size: 14px;">${data.company || "—"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600;">Service Type:</td>
                <td style="padding: 10px 0; color: #184478; font-size: 14px; font-weight: 600;">${data.serviceType || "Not specified"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600;">Expected Date:</td>
                <td style="padding: 10px 0; color: #0F2C4E; font-size: 14px;">${data.expectedDate || "—"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600;">Lane / Route:</td>
                <td style="padding: 10px 0; color: #0F2C4E; font-size: 14px;">${data.origin || "Origin not specified"} &rarr; ${data.destination || "Destination not specified"}</td>
              </tr>
            </tbody>
          </table>

          <div style="background-color: #f8fafc; border-left: 4px solid #51B0B7; padding: 14px 16px; margin-top: 16px; border-radius: 4px;">
            <p style="margin: 0 0 6px 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase;">Shipment Details / Message:</p>
            <p style="margin: 0; color: #0F2C4E; font-size: 14px; white-space: pre-wrap; line-height: 1.5;">${data.message}</p>
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
            This email was sent from the Shepherd Shipping website contact form.
          </div>
        </div>
      `,
    });

    if (sendError) {
      console.error("Resend delivery failed:", sendError);
      return {
        success: false,
        message: "Failed to send enquiry via email service.",
        errors: {
          _form: [sendError.message || "Failed to deliver email message."],
        },
        timestamp: Date.now(),
      };
    }

    return {
      success: true,
      message:
        "Thank you! Your enquiry has been received. Our operations team will review your cargo lane and reply within one business day.",
      timestamp: Date.now(),
    };
  } catch (error: any) {
    console.error("Resend exception:", error);
    return {
      success: false,
      message: "An unexpected error occurred while submitting your enquiry.",
      errors: {
        _form: [error?.message || "Internal server error occurred."],
      },
      timestamp: Date.now(),
    };
  }
}
