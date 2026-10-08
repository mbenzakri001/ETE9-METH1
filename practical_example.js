function getActiveUserStatus(user){
    const userAge = user.age >= 18 ? "Adult" : "Minor";
    return `Active ${userAge} user`;
}

function getUserStatus(user) {
     if (user.isBanned) {
        return "Banned user";
    }
    if (user.isAdmin) {
        return "Admin";
    }
    if (!user.isActive){
        return "Inactive user";
    }
    return getActiveUserStatus(user);
}


const MAX_PRICE = 100;
const DISCOUNT_RATE = 0.20;


function ApplyDiscount(total){
    return total - total*DISCOUNT_RATE;
}

function isEligibleForDiscount(total){
    return total > MAX_PRICE ? ApplyDiscount(total) : total;
}

function calculateTotal(items) {
    let total = 0;
    for (const item in items) {
        total += item.price * item.quantity;
    }
    return isEligibleForDiscount(total);
}


function checkReservation(reservation) {

    if (reservation.isCancelled) {
        return "Reservation cancelled";
    } 
    
    if (reservation.guests <= 0) {
       return "Invalid number of guests";
    } 
    if (reservation.guests > 10) {
       return "Group reservation";
    } 
    if (reservation.isConfirmed) {
        return "Reservation confirmed";
    }
    return "Reservation pending";

}


function createAccount(user) {
    let message = "";

    if (user.name === "" || user.email === "") {
        message = "Missing information";
    } else if (!user.email.includes("@")) {
        message = "Invalid email";
    } else if (user.password.length < 8) {
        message = "Password too short";
    } else {
        if (user.age < 18) {
            message = "User must be at least 18 years old";
        } else {
            user.status = "active";
            user.createdAt = new Date();
            message = "Account created successfully";

            if (user.isPremium) {
                user.subscription = "premium";
                message += " - Premium account";
            }
        }
    }

    return message;
}