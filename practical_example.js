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

function EligibleForDiscount(total){
    return total > MAX_PRICE;
}

function calculateTotal(items) {
    let total = 0;
    for (const item in items) {
        total += item.price * item.quantity;
    }
    if (EligibleForDiscount(total)) {
        return ApplyDiscount(total);
    }
    return total;
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


const PASSWORD_MIN_LEN = 8;

function isUserMinor(user){
    return user.age < 18;
}

function ValidateUser(user) {
    if (!user.name || !user.email) {
        return [false, "Missing information"];
    } 
    if (!user.email.includes("@")) {
        return [false, "Invalid email"];
    } 
    if (user.password.length < PASSWORD_MIN_LEN) {
        return [false, "Password too short"];
    }
    if (isUserMinor(user)) {
        return [false, "User must be at least 18 years old"];
    }
    return [true,""];
}

function createAccount(user) {

    const [isOk, errorMessage] = ValidateUser(user);
    if (!isOk){
        return errorMessage;
    }
    
    user.status = "active";
    user.createdAt = new Date();    

    if (user.isPremium) {
            user.subscription = "premium";
            return "Account created successfully - Premium subscription OK"
        }        

    return "Account created successfully";

}