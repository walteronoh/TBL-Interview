function isPerfectSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
}

function isFibonacci(n) {
    if (n < 0) return false;
    const x1 = 5 * n * n + 4;
    const x2 = 5 * n * n - 4;
    return isPerfectSquare(x1) || isPerfectSquare(x2);
}

export {
    isPerfectSquare,
    isFibonacci
}