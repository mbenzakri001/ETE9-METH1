import { libGsmClient, LibGsmSms } from "./libGSM.js";
const smscNumber = "+33 6 89 00 40 00"


export function smsContent(otp){
    let smsContent = "Bonjour,\n";
        smsContent += `Pour vous connecter sur le portail entrez le code : ${otp}\n`;
        smsContent += "Si vous n'êtes pas à l'origine de cette demande, contactez le support."
    return smsContent;
}

export function sendSMS(smsContent, phoneNumber) {
    libGsmClient.attachToSMSC(smscNumber);
    const sms = new LibGsmSms();
    sms.senderNum = "+33 7 12 34 56 78";
    sms.num = phoneNumber;
    sms.payload = smsContent;
    libGsmClient.routeSMS(sms);
}