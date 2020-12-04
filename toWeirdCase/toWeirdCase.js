function toWeirdCase(string) {
    if (!string || string === "") {
        return string;
    }

    const weirdMapper = (w) => {
        return w.split('').map((c, i) => {
            return i % 2 == 0 ? c.toUpperCase() :  c.toLowerCase();
        }).join('');
    }

    const words = string.split(" ");

    return words.map(weirdMapper).join(" ");
}

module.exports = { toWeirdCase };

