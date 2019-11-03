function withoutDoubles(die1, die2, noDoubles) {
    if (die1 !== die2) {
        if (noDoubles === true) {
            return die1 + die2;
        } else {
            return die1 + die2;
        }
    } else {
        if (noDoubles === true) {
            if (die1 === 6 && die2 === 6) {
                return die1 + 1;
            } else {
                return die1 + die2 + 1;
            }
        } else {
            return die1 + die2;
        }
    }
}