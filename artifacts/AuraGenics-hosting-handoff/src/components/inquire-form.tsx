import { Check } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { FieldLabel, Input, Select, Textarea } from "@/components/ui/field";
import { INTERESTS, ROLES, US_STATES } from "@/lib/site";
import { sendInquiry } from "@/lib/submit-inquiry";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  practice: string;
  role: string;
  state: string;
  interest: string;
  message: string;
  licensed: boolean;
};

const empty = (interest: string): FormState => ({
  name: "",
  email: "",
  phone: "",
  practice: "",
  role: "",
  state: "",
  interest,
  message: "",
  licensed: false,
});

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-accent">{message}</p>;
}

export function InquireForm({
  defaultInterest = "",
  compact = false,
}: {
  defaultInterest?: string;
  compact?: boolean;
}) {
  const initialInterest = useMemo(() => {
    const match = INTERESTS.find((i) => i.value === defaultInterest);
    return match?.value ?? defaultInterest ?? "";
  }, [defaultInterest]);

  const [form, setForm] = useState<FormState>(() => empty(initialInterest));
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState<FormState | null>(null);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!isEmail(form.email.trim())) next.email = "Enter a business email.";
    if (!form.interest) next.interest = "Select a line of interest.";
    if (!form.licensed) next.licensed = "Required for professional inquiries.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setSending(true);
    setSendError("");
    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        practice: form.practice.trim(),
        role: form.role,
        state: form.state,
        interest:
          INTERESTS.find((i) => i.value === form.interest)?.label ??
          form.interest,
        message: form.message.trim(),
      };
      await sendInquiry(payload);
      const record = { ...form, at: new Date().toISOString() };
      try {
        const existing = JSON.parse(
          localStorage.getItem("auragenics-inquiries") || "[]",
        ) as unknown[];
        localStorage.setItem(
          "auragenics-inquiries",
          JSON.stringify([record, ...existing].slice(0, 20)),
        );
      } catch {
        /* preview storage is best-effort */
      }
      setSubmitted(form);
    } catch {
      setSendError(
        "We could not send your inquiry. Please try again in a moment.",
      );
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-line bg-surface p-8 md:p-10">
        <div className="mb-5 flex size-11 items-center justify-center rounded-full bg-accent text-accent-fg">
          <Check className="size-5" strokeWidth={2} />
        </div>
        <p className="text-kicker uppercase tracking-kicker text-accent">
          Inquiry received
        </p>
        <h3 className="mt-3 font-display text-3xl text-fg">
          Your inquiry is with us.
        </h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          A representative will follow up at {submitted.email} with professional
          information for your practice.
        </p>
        <ol className="mt-8 space-y-3 text-sm text-muted">
          <li>
            <span className="text-accent">01</span> — We review discipline,
            setting, and the questions you raised.
          </li>
          <li>
            <span className="text-accent">02</span> — You receive a dossier or
            a short call, whichever fits.
          </li>
          <li>
            <span className="text-accent">03</span> — If there is a fit, we
            onboard with lot-level records in hand.
          </li>
        </ol>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      noValidate
    >
      <div>
        <FieldLabel htmlFor="name">Name *</FieldLabel>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Full name"
          value={form.name}
          onChange={(e) => set("name", e.target.value)}
        />
        <FieldError message={errors.name} />
      </div>
      <div>
        <FieldLabel htmlFor="email">Business email *</FieldLabel>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="name@practice.com"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
        />
        <FieldError message={errors.email} />
      </div>
      <div>
        <FieldLabel htmlFor="phone">Phone</FieldLabel>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Optional"
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
        />
      </div>
      <div>
        <FieldLabel htmlFor="practice">Practice / organization</FieldLabel>
        <Input
          id="practice"
          name="practice"
          placeholder="Clinic name"
          value={form.practice}
          onChange={(e) => set("practice", e.target.value)}
        />
      </div>
      {!compact ? (
        <>
          <div>
            <FieldLabel htmlFor="role">Role</FieldLabel>
            <Select
              id="role"
              name="role"
              value={form.role}
              onChange={(e) => set("role", e.target.value)}
            >
              <option value="">Select</option>
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <FieldLabel htmlFor="state">State</FieldLabel>
            <Select
              id="state"
              name="state"
              value={form.state}
              onChange={(e) => set("state", e.target.value)}
            >
              <option value="">Select</option>
              {US_STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
          </div>
        </>
      ) : null}
      <div className="sm:col-span-2">
        <FieldLabel htmlFor="interest">Primary interest *</FieldLabel>
        <Select
          id="interest"
          name="interest"
          value={form.interest}
          onChange={(e) => set("interest", e.target.value)}
        >
          <option value="">Select a discipline</option>
          {INTERESTS.map((i) => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </Select>
        <FieldError message={errors.interest} />
      </div>
      <div className="sm:col-span-2">
        <FieldLabel htmlFor="message">What are you exploring?</FieldLabel>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Please do not include patient information."
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
        />
      </div>
      <div className="sm:col-span-2">
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted">
          <input
            type="checkbox"
            className="mt-1 size-4 shrink-0 accent-accent"
            checked={form.licensed}
            onChange={(e) => set("licensed", e.target.checked)}
          />
          <span>
            I am inquiring on behalf of a licensed medical or aesthetic
            practice. This is not a consumer request.
          </span>
        </label>
        <FieldError message={errors.licensed} />
      </div>
      <div className="sm:col-span-2 pt-2">
        {sendError ? (
          <p className="mb-3 text-sm text-accent">{sendError}</p>
        ) : null}
        <Button
          type="submit"
          size="lg"
          disabled={sending}
          className={cn("w-full sm:w-auto")}
        >
          {sending ? "Sending…" : "Submit inquiry"}
        </Button>
      </div>
    </form>
  );
}

export function InquireSection({
  defaultInterest,
  compact,
}: {
  defaultInterest?: string;
  compact?: boolean;
}) {
  return (
    <section id="inquire" className="border-t border-ink bg-bg">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div>
          <p className="text-kicker uppercase tracking-kicker text-accent">
            Practice inquiry
          </p>
          <h2 className="mt-5 font-display text-4xl text-ink">
            A conversation with the{" "}
            <em className="italic text-accent">desk.</em>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            The catalog. Licensed practices only. No patient details, please.
          </p>
        </div>
        <InquireForm defaultInterest={defaultInterest} compact={compact} />
      </div>
    </section>
  );
}
