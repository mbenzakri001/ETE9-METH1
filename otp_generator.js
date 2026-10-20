export function generateOTP(){
    const randomSeed = Math.floor(Math.random() * 100);
    const timeSeed = Date.now;
    return `${randomSeed}${timeSeed}`;
}