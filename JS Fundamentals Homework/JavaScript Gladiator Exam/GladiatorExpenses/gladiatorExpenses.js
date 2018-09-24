function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let result = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            result += helmetPrice;
        }

        if (i % 3 === 0) {
            result += swordPrice;
        }

        if (i % 6 === 0) {
            result += shieldPrice;
        }

        if (i % 12 === 0) {
            result += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);