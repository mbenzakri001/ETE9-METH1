import { database } from "./database.js";
import { libGsmClient, LibGsmSms } from "./libGSM.js";
import { libSmtpClient, LibSmtpEmail } from "./libSMTP.js";

const smscNumber = "+33 6 89 00 40 00"

function generateOTP(){
    const randomSeed = Math.floor(Math.random() * 100);
    const timeSeed = Date.now % 100;
    return `${randomSeed}${timeSeed}`;
}

function smsContent(otp){
    let smsContent = "Bonjour,\n";
        smsContent += `Pour vous connecter sur le portail entrez le code : ${otp}\n`;
        smsContent += "Si vous n'êtes pas à l'origine de cette demande, contactez le support."
    return smsContent;
}

function emailContent(otp){
    let emailContent = "<p>Bonjour,</p>";
        emailContent += `<p>Pour vous connecter sur le portail entrez le code : ${otp}</p>`;
        emailContent += "<p>Si vous n'êtes pas à l'origine de cette demande, contactez le support.</p>"
    return emailContent;
}

export function sendOTP(accountId) {
    const otp = generateOTP();

    const account = database.fetchAccount(accountId);
    if (account.preferSMS) {
        sendSMS(smsContent(otp), account.phoneNumber);
    } else {
        sendEmail(emailContent(otp), account.emailAddress);
    }
}

function sendSMS(smsContent, phoneNumber) {
    libGsmClient.attachToSMSC(smscNumber);
    const sms = new LibGsmSms();
    sms.senderNum = "+33 7 12 34 56 78";
    sms.num = phoneNumber;
    sms.payload = smsContent;
    libGsmClient.routeSMS(sms);
}

function sendEmail(emailContent, address) {
    libSmtpClient.connect();
    const email = new LibSmtpEmail();
    email.senderAddress = "noreply@auth.com"
    email.recipientAddress = address;
    email.content = emailContent;
    libSmtpClient.send(email);
}