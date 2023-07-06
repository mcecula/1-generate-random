function tablica(min, max, length) {
    const tablica = [];
    for (let i = 0; i < length; i++) {
        tablica.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return tablica;
}
console.log(tablica(1, 10, 10));

module.exports = {
    tablica: tablica
}