const wordSearch = (letters, word) => {
    const verticalJoin = transpose(letters).join("");
    const horizontalJoin = letters.map(ls => ls.join('')).join();

    if (horizontalJoin.includes(word)) {
        return true;
    } else if (verticalJoin.includes(word)) {
        return true;
    } else {
        return false;
    }
};

const transpose = function(matrix) {
    let returnArray = [];

    for (let i = 0; i < matrix[0].length; i++) {
        let newArray = [];
        for (let j = 0; j < matrix.length; j++) {
            newArray.push(matrix[j][i]);
        }
        returnArray.push(newArray);
    }

    return returnArray.map(ls => ls.join(''));
    ``
};

module.exports = wordSearch;