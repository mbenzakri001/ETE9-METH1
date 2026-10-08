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
    let message = "";

    if (reservation.isCancelled) {
        message = "Reservation cancelled";
    } else {
        if (reservation.guests <= 0) {
            message = "Invalid number of guests";
        } else if (reservation.guests > 10) {
            message = "Group reservation";
        } else {
            if (reservation.isConfirmed) {
                message = "Reservation confirmed";
            } else {
                message = "Reservation pending";
            }
        }
    }

    return message;
}
