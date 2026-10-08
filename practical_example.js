function getUserInfo(user) {
    if (user.isAdmin) {
        result = "Admin: " + user.name;
    }
    if (!user.isActive) {
        result = "Inactive user: " + user.name;
    }
    return "User: " + user.name;
}

const max_pice = 100;
const discount_rate = 0.20;

function ApplyDiscount(item_price){
    return item_price*discount_rate
}

function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total = total + items[i].price * items[i].quantity;
    }
    return ApplyDiscount(total);
}