function getUserInfo(user) {
    if (user.isAdmin) {
        result = "Admin: " + user.name;
    }
    if (!user.isActive) {
        result = "Inactive user: " + user.name;
    }
    return "User: " + user.name;
}


function calculateTotal(items) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        total = total + items[i].price * items[i].quantity;
    }

    if (total > 100) {
        total = total - total * 0.10;
    }

    return total;
}