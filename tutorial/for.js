const   lunch = {
    name: 'ramen',
    taste: 'spicy',
    calo: 500,
    cold: false
};

for (const key in lunch) {
    console.log(key, ': ', lunch[key]);
}

const   numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    console.log(number);
}