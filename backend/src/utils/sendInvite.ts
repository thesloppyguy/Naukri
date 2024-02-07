import { ServerClient } from 'postmark';
import env from './validateEnv';

export const sendInvite = async (token: string, to: string, type: string) => {
  const url = env.EMAIL_URL + `/user/${type}/${token}`;
  const subject =
    type === 'activate'
      ? 'Activate Lokibots Account'
      : 'Reset Lokibots Password';
  const client = new ServerClient(env.POSTMARK_KEY);
  await client.sendEmail({
    From: 'sahil@lokibots.com',
    To: to,
    Subject: subject,
    HtmlBody: `<a href=${url}>${subject}</a>`,
    TextBody: 'Hello from Postmark!',
    MessageStream: 'broadcast',
  });
};
