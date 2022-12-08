export function generateRandomCode (): number {
    const max: number = 9;
    const min: number = 0;
    const randomCodeSize: number = 6;

    const listNumbers: Array<number> = [];

    for (let i = 0; i < randomCodeSize; i++) {
      const randomNumber: number = Math.floor(Math.random() * (max - min)) + min;
      listNumbers.push(randomNumber);
    };

    const randomCode: number = Number(listNumbers.join(''));
    return randomCode;
};
