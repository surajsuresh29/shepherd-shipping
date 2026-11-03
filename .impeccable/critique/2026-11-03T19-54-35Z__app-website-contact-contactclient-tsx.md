---
target: contact us page
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 3
target_identity: "file:/Users/ss297/Desktop/Shepherd/app/(website)/contact/ContactClient.tsx"
target_fingerprint: "sha256:157b4f581a89599da87ee13cec29b5709a736884539d41a9a6e46222aab5617c"
target_path: /Users/ss297/Desktop/Shepherd/app/(website)/contact/ContactClient.tsx
timestamp: 2026-11-03T19-54-35Z
slug: app-website-contact-contactclient-tsx
---
# Design Critique — Contact Us Page (Shepherd Shipping)

**Method: dual-agent** (Assessment A: independent design-review subagent · Assessment B: detector + live-browser-evidence subagent, run in isolation from each other)

---

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Submit shows a spinner + success card, but validation errors render off-screen with no scroll-to-error |
| 2 | Match System / Real World | 3 | Plain-language labels and flexible date entry fit how shippers think; "Multimodal / Project Cargo" is unexplained jargon |
| 3 | User Control and Freedom | 2 | No cancel/undo mid-fill; "Send another enquiry" wipes all fields with no edit-and-resend path |
| 4 | Consistency and Standards | 3 | Uniform field styling throughout; Expected Date is free text while Service Type correctly uses a native select |
| 5 | Error Prevention | 2 | noValidate suppresses native constraints; no inline/on-blur validation; phone format hint vanishes on focus |
| 6 | Recognition Rather Than Recall | 3 | Labels stay visible, required fields marked with asterisks; phone placeholder disappears once focused |
| 7 | Flexibility and Efficiency | n/a | Low-frequency marketing/lead-gen surface — power-user shortcuts don't apply |
| 8 | Aesthetic and Minimalist Design | 3 | Clean, on-brand palette and spacing; three stacked verification labels crowd the submit area |
| 9 | Error Recovery | 3 | Specific, field-adjacent error copy that preserves input; but no error summary or aria-live |
| 10 | Help and Documentation | n/a | A contact form doesn't need docs; the "call us for urgent shipments" line is the right-sized help path |
| **Total** | | **21/32** | **Acceptable (65.6%)** |

---

## Design Specificity Verdict

**LLM assessment:** This page is genuinely authored for a freight forwarder, not a reskinned template — the diagonal-stripe navy texture, the "Our offices" manifest-table section, copy like "Let's talk cargo" and "a specialist in air, sea, land or customs will size up the lane," the real logistics service list, and "We reply from our operations team, not an automated chatbot" are all industry-aware, deliberate choices.

But the form's actual fields are still generic-SaaS-contact-form DNA. The biggest miss: nothing captures what a freight forwarder actually needs to quote fast — weight/volume, FCL/LCL, Incoterms — it's all folded into one free-text paragraph instead of structured fields. Strong voice and branding; shallow product-specific field design.

**Deterministic scan:** impeccable detect --json on app/(website)/contact returned exit code 2, 1 finding:
- side-tab (Side-tab accent border) — warning/slop — app/(website)/contact/ContactClient.tsx:352 — border-l-4 on the post-submission success card. A recognized "AI-generated UI" tell. Conditionally rendered (only after a successful submit), so neither agent could visually confirm it live without completing a real submission — but it's real in source, not a false positive.

**Visual overlays:** Not available this run. Script injection mechanically succeeded, but the injected detect.js itself failed to load (400 Bad Request, then net::ERR_BLOCKED_BY_CLIENT) — most likely the HTTPS page blocking a localhost request under mixed-content/Private Network Access policy, or the browser pane lacking a route to this machine. No in-page overlay findings are available; the CLI scan plus both agents' direct visual inspection stand in as the fallback evidence instead.

---

## Overall Impression

The copy and brand execution are the strongest thing here. The structural bones (chunking, hierarchy, error-copy quality, preserved form state on failed submit) are solidly built. But the page loses points in exactly the moments that matter most: when a submission fails, errors go unseen; on mobile, a fixed header clips content and the offices table breaks down hardest. The biggest opportunity is fixing the mobile layout bugs and submit-error visibility — both independently caught by two separate assessments.

---

## What's Working

1. **Copy voice** — "Let's talk cargo," "rough dimensions and dates are fine if you don't have exact figures yet," "We reply from our operations team, not an automated chatbot" — actively lowers anxiety and shows the team understands their own customers.
2. **Error-handling architecture under the hood** — controlled form state preserves every field's value across a failed server-action round trip, so a user never loses what they typed.
3. **The "Our offices" manifest-table section** (on desktop) — turns a mundane office directory into on-brand visual identity, with practical tap-to-call links.

---

## Priority Issues

**[P0] No scroll-to-first-error / error summary on submit**
- Why it matters: Submitting from the bottom of the form only surfaces errors near that scroll position — Full Name and Email errors above render completely off-screen. A user concludes the form "did nothing" and abandons. Breaks heuristics 1 and 9 at once.
- Fix: On failed submit, scroll/focus to the first invalid field (or a form-level error summary at the top); add aria-live="polite" so screen readers announce it immediately.
- Suggested command: /impeccable harden

**[P1] Mobile: fixed header overlaps/clips page content on scroll** (independently confirmed by both assessments)
- Why it matters: A floating pill-shaped nav stays on top of form content as the user scrolls at 375px width, obscuring exactly the fields a mobile visitor is trying to read and fill.
- Fix: Add scroll-aware z-index/offset handling, or reduce the header's fixed footprint on mobile so it never overlaps form content.
- Suggested command: /impeccable adapt

**[P1] Mobile: "Our offices" table hides Phone/Hours with no scroll affordance** (independently confirmed by both assessments)
- Why it matters: At 375px, only Office and Address columns are visible; Phone and Hours are clipped off-screen with zero scroll hint. Phone is the single most actionable data point in that section.
- Fix: Switch to a stacked per-office card layout on mobile; reserve the table treatment for >=tablet widths.
- Suggested command: /impeccable adapt

**[P1] No visible keyboard focus indicator on inputs**
- Why it matters: Every input/select/textarea uses focus:ring-0 focus:outline-none, relying solely on a 1px underline color shift. A keyboard-only or low-vision user has almost nothing to track focus by — and the submit button does use focus:ring-2, so this is an inconsistency, not a deliberate system.
- Fix: Apply a visible focus ring/border treatment to inputs consistent with the submit button's.
- Suggested command: /impeccable audit

**[P2] CAPTCHA sits before the CTA with zero framing**
- Why it matters: The Turnstile widget is the highest-friction element on the page, at the moment of maximum commitment, with no explanation of why it's there.
- Fix: Add one line of context, or switch Turnstile to invisible/managed mode.
- Suggested command: /impeccable clarify

**[P2] Post-submission success card uses a recognizable "AI slop" pattern**
- Why it matters: The border-l-4 thick colored side-border on the success card (ContactClient.tsx:352) is a known generic-AI-UI tell that undercuts the otherwise deliberate design work elsewhere.
- Fix: Replace with a subtler accent (background tint, thin top border, or icon-led treatment).
- Suggested command: /impeccable polish

---

## Persona Red Flags

**Sam (Accessibility-dependent) — High risk:** No visible focus ring on any input; noValidate + no aria-live means a screen-reader user who submits with errors gets no spoken signal. Teal asterisk accent worth a formal 4.5:1 contrast check.

**Casey (Distracted mobile user) — High risk:** Office table's Phone/Hours columns are unreachable off-screen. Fixed nav header overlaps form content mid-scroll. ~1.5+ screens of hero scroll before the first input field appears.

**Jordan (Confused first-timer) — Moderate risk:** "Multimodal / Project Cargo" and "Customs Clearance" presented with zero inline explanation. Phone field's "+971..." placeholder implicitly assumes a UAE number with no guidance for Hong Kong/Miami customers, and vanishes once typing starts.

---

## Minor Observations

- Turnstile's own error state clears silently with no distinct retry message.
- Required-field asterisks use brand teal rather than conventional red.
- "Send another enquiry" fully wipes Name/Company/Email too, losing a chance to prefill for a returning shipper.
- The isComingSoon India office entry is styled distinctly rather than hidden or faked — a good honest micro-decision.
- min-h-[550px] + transition-all on the form section appears to be deliberate defensive CSS to avoid layout jump.

---

## Questions to Consider

1. Would a lighter "fast quote" path with an optional "add shipment details" expansion convert better than one flat 9-field form?
2. Is Turnstile solving a measured spam problem, or taxing every legitimate enquiry's highest-anxiety moment?
3. Should the phone placeholder be region-aware (or removed) given the company serves UAE, Hong Kong, and Miami?
4. Why does "Our offices" degrade from the strongest desktop section to the weakest mobile experience?
