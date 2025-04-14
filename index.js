const spinWords= (string) => {
    const arr = string.split(' ');
    const result = arr.map(word => {
        return word.length >= 5 ? word.split('').reverse().join('') : word;
    });
    return result.join(' ');
}

spinWords('Just kidding there is still one more1111')