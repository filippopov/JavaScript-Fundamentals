function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');

    let executor = {
        Buy: function (item) {
            if (inventory.indexOf(item) < 0) {
                inventory.push(item);
            }
        },
        Trash: function (item) {
            let index = inventory.indexOf(item);

            if (index > -1) {
                inventory.splice(index, 1);
            }
        },
        Repair: function (item) {
            let index = inventory.indexOf(item);

            if (index > -1) {
                let item = inventory.splice(index, 1);
                inventory.push(item[0]);
            }
        },
        Upgrade: function (item) {
            let [itemName, upgradeName] = item.split('-');
            let index = inventory.indexOf(itemName);

            if (index > -1) {
                inventory.splice(index + 1, 0, `${itemName}:${upgradeName}`);
            }
        },
    };

    for (let row of arr) {
        let [command, item] = row.split(' ');
        if (row === 'Fight!') {
            break;
        }
        executor[command](item);
    }

    console.log(inventory.join(' '));
}

let test = [
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Fight!',
];

gladiatorInventory(test);