function frontTimes(str, n) {
    if (str.legth > 2) {
        return str.repeat(n);
    } else {
        let firstThree = str.substring(3, 0);
        return firstThree.repeat(n);
    }
}