import postmark from "postmark"

export const sendInvite = () => {
  const client = new postmark.ServerClient("c0677b93-4824-4a59-a5df-2c667c321e61");
  client.sendEmail({
    "From": "sahil@lokibots.com",
    "To": "gokusbrothersahil@gmail.com",
    "Subject": "Hello from Postmark",
    "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
    "TextBody": "Hello from Postmark!",
    "MessageStream": "broadcast"
  }).then((response) => { return response }).catch((error) => console.log(error));

}
