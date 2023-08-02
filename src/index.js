module.exports = function reverse (n) {
    let num = Math.abs(n);
    num = n.toString();
    num = num.split("").reverse().join("");
    num = Number(parseInt(num));
    return num;
}
