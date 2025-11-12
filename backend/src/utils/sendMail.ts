import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY as string);

interface MailOptions {
  to: string;
  subject: string;
  text: string;
}

export const sendMail = async ({
  to,
  subject,
  text,
}: MailOptions): Promise<void> => {
  await resend.emails.send({
    from: "no-reply@tondomaine.com",
    to,
    subject,
    text,
  });
};
