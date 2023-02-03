function generateRandomCode () {
    const max = 9;
    const min = 0;
    const randomCodeSize = 6;

    const listNumbers = [];

    for (i = 0; i < randomCodeSize; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min)) + min;
      listNumbers.push(randomNumber);
    };

    const randomCode = Number(listNumbers.join(''));
    return randomCode;
};

module.exports = generateRandomCode;