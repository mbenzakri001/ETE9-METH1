import { database } from "./database.js";
import { generateOTP } from "./otp_generator.js";
import { sendSMS, smsContent } from "./sms_sender.js";
import { sendEmail, emailContent } from "./email_sender.js";

export function sendOTP(accountId) {
    const otp = generateOTP();

    const account = database.fetchAccount(accountId);
    if (account.preferSMS) {
        sendSMS(smsContent(otp), account.phoneNumber);
    } else {
        sendEmail(emailContent(otp), account.emailAddress);
    }
}
