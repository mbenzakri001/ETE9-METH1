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
    return total > MAX_PRICE ? (total - total*DISCOUNT_RATE) : total;
}

function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
    }
    return ApplyDiscount(total);
}
