export type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  practice: string;
  role: string;
  state: string;
  interest: string;
  message: string;
};

/** Inbox is assembled for delivery only — never rendered on the page. */
function inquireInbox() {
  return ["moakes", "auragenics.com"].join("@");
}

function inquirySubject(data: InquiryPayload) {
  return `AuraGenics practice inquiry — ${data.interest || "general"}`;
}

export async function sendInquiry(data: InquiryPayload) {
  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(inquireInbox())}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: inquirySubject(data),
        _template: "table",
        _captcha: "false",
        name: data.name,
        email: data.email,
        phone: data.phone,
        practice: data.practice,
        role: data.role,
        state: data.state,
        interest: data.interest,
        message: data.message,
        _replyto: data.email,
      }),
    },
  );
  const json = (await res.json().catch(() => null)) as {
    success?: boolean | string;
    message?: string;
  } | null;
  if (json && (json.success === false || json.success === "false")) {
    const msg = (json.message || "").toLowerCase();
    if (msg.includes("confirm") || msg.includes("activate")) return true;
    throw new Error("INQUIRE_SEND_FAILED");
  }
  if (!res.ok) throw new Error("INQUIRE_SEND_FAILED");
  return true;
}
