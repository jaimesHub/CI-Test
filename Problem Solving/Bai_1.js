function findOppositeNumber(n, firstNum) {
    if (firstNum < (n / 2) - 1) {
        return firstNum + n / 2;
    } else {
        return Math.abs(n / 2 - firstNum);
    }
}