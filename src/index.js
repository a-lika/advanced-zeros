module.exports = function getZerosCount(number, base) {
    let currentNumber = number;
    let baseCount = 0;
    let numCount = 0;
    let num;

    for (let i = 2; i <= base; i++) {
        if (base % i == 0) {
            baseCount = 0;
            do {
                baseCount++;
                base = Math.floor(base / i);
            } while (base % i == 0);
            num = number;
            numCount = 0;
            do {
                numCount += Math.floor(num / i);
                num = Math.floor(num / i);
            } while (num / i > 0);

            if (currentNumber > numCount / baseCount) {
                currentNumber = numCount / baseCount;
            }
        }
    }
    return Math.floor(currentNumber);
};
