function getUserInfo(user) {
    let result = "";

    if (user.isAdmin === true) {
        result = "Admin: " + user.name;
    } else {
        if (user.isActive === true) {
            result = "User: " + user.name;
        } else {
            result = "Inactive user: " + user.name;
        }
    }

    return result;
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