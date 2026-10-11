import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Let's Talk Cargo | Shepherd International Logistics Dubai",
  description:
    "Get in touch with Shepherd International Logistics. 8 office locations across the UAE, Hong Kong, and Miami. Fast shipment quotes for air, ocean, and road freight.",
};

export default function ContactPage() {
  return <ContactClient />;
}
