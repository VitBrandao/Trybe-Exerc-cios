const num = -12;

function positiveNegative (x) {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else {
        return "fucking zero";
    }
}

console.log(positiveNegative(num));