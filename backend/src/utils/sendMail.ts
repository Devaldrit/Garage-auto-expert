import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendMail = async ({
  to,
  subject,
  html,
  text,
}: {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
}) => {
  if (!html && !text) {
    throw new Error("Vous devez fournir either html or text");
  }

  const payload: any = {
    from: "No-Reply <onboarding@resend.dev>",
    to,
    subject,
  };
  if (html) payload.html = html;
  if (text) payload.text = text;

  const { data, error } = await resend.emails.send(payload);

  if (error) {
    console.error("Erreur Resend:", error);
    throw new Error(error.message || "Erreur lors de l’envoi email Resend");
  }

  console.log("Email envoyé, data:", data);
  return data;
};
