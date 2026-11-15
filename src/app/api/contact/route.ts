import { Resend } from "resend";

const esc = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export async function POST(req: Request) {
  const { name, email, company, phone, service, message } = await req.json().catch(() => ({}));

  if (typeof name !== "string" || !name.trim() || typeof email !== "string" || !email.includes("@")) {
    return Response.json({ error: "Name and a valid email are required." }, { status: 400 });
  }

  // ponytail: built per-request so a missing env var fails at runtime, not at build time.
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: "Email service not configured." }, { status: 500 });
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

  const row = (label: string, value?: string) =>
    value ? `<tr><td style="padding:4px 12px 4px 0;color:#666">${label}</td><td>${esc(value)}</td></tr>` : "";

  try {
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "admin@edventurehub.com",
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      html: `<h2 style="margin:0 0 12px">New contact form submission</h2>
<table style="font:14px system-ui;border-collapse:collapse">
${row("Name", name)}
${row("Email", email)}
${row("Company", company)}
${row("Phone", phone)}
${row("Service", service)}
</table>
${message ? `<p style="margin:16px 0 4px;color:#666">Message</p><p style="white-space:pre-wrap">${esc(message)}</p>` : ""}`,
    });
    if (error) return Response.json({ error: error.message }, { status: 502 });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Could not send message." }, { status: 500 });
  }
}
