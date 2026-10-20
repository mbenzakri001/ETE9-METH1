import { libSmtpClient, LibSmtpEmail } from "./libSMTP.js";

export function emailContent(otp){
    let emailContent = "<p>Bonjour,</p>";
        emailContent += `<p>Pour vous connecter sur le portail entrez le code : ${otp}</p>`;
        emailContent += "<p>Si vous n'êtes pas à l'origine de cette demande, contactez le support.</p>"
    return emailContent;
}

export function sendEmail(emailContent, address) {
    libSmtpClient.connect();
    const email = new LibSmtpEmail();
    email.senderAddress = "noreply@auth.com"
    email.recipientAddress = address;
    email.content = emailContent;
    libSmtpClient.send(email);
}