const isOddOrEven = (value) => {
    if (typeof value !== 'string') {
        return undefined;
    }
    return value.length % 2 === 0 ? 'even' : 'odd';
}


module.exports = isOddOrEven;