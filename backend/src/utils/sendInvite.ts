import postmark from "postmark"
import env from './validateEnv'

export const sendInvite = (token: string, to: string, type: string,) => {
  const url = env.DOMAIN_URL + `/user/${type}/${token}`
  const subject = (type === "activate") ? "Activate Lokibots Account" : "Reset Lokibots Password"
  const client = new postmark.ServerClient("c0677b93-4824-4a59-a5df-2c667c321e61");
  client.sendEmail({
    "From": "sahil@lokibots.com",
    "To": to,
    "Subject": subject,
    "HtmlBody": `Activate your account <a href=${url}>Activate your account.</a>`,
    "TextBody": "Hello from Postmark!",
    "MessageStream": "broadcast"
  }).then((response) => { return response }).catch((error) => console.log(error));
}
