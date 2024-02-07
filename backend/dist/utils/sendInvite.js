"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendInvite = void 0;
const postmark_1 = require("postmark");
const validateEnv_1 = __importDefault(require("./validateEnv"));
const sendInvite = async (token, to, type) => {
    const url = validateEnv_1.default.EMAIL_URL + `/user/${type}/${token}`;
    const subject = type === 'activate'
        ? 'Activate Lokibots Account'
        : 'Reset Lokibots Password';
    const client = new postmark_1.ServerClient(validateEnv_1.default.POSTMARK_KEY);
    await client.sendEmail({
        From: 'sahil@lokibots.com',
        To: to,
        Subject: subject,
        HtmlBody: `<a href=${url}>${subject}</a>`,
        TextBody: 'Hello from Postmark!',
        MessageStream: 'broadcast',
    });
};
exports.sendInvite = sendInvite;
