import { alphabet } from './alphabet';
import dotenv from 'dotenv';

dotenv.config();

export function decryption(value: string): string {
  let hash: string = process.env.HASH_KEY || "";
  const encryptedText: string = value;

  const initialHashLength: number = hash.length;
  const encryptedTextGreaterThanHash: boolean = encryptedText.length > hash.length;

  hash += encryptedText.substring(0, encryptedText.length - hash.length);

  const hashToArray: Array<string> = hash.split('');
  const encryptedTextToArray: Array<string> = encryptedText.split('');

  const indexOfItemsHash: Array<number> = [];
  hashToArray.forEach((item: string) => {
    indexOfItemsHash.push(alphabet.indexOf(item))
  });

  const indexOfEncryptedText: Array<number> = [];
  encryptedTextToArray.forEach((item: string) => {
    indexOfEncryptedText.push(alphabet.indexOf(item));
  });

  let indexOfItemsPlainText: Array<number> = [];
  function formatPlainText(): number[] {
    if (indexOfItemsPlainText.length > 0) {
      indexOfItemsPlainText = [];
    };

    for (let i = 0; i < indexOfEncryptedText.length; i++) {
      let result: number = indexOfEncryptedText[i] - indexOfItemsHash[i];
  
      if(result < 0) {
        result = alphabet.length - Math.abs(result);
      };
  
      indexOfItemsPlainText.push(result);
    };
    
    return indexOfItemsPlainText;
  };

  formatPlainText();

  if (encryptedTextGreaterThanHash) {
    let count: number = 0;
    for (let i = initialHashLength; i < encryptedText.length; i++) {
      indexOfItemsHash[i] = indexOfItemsPlainText[count];
      count++;
    };

    formatPlainText();
  };

  let plainText: string = "";
  indexOfItemsPlainText.forEach((item: number) => {
    if (item > alphabet.length - 1) {
      item = item - alphabet.length;
    };

    plainText += alphabet[item];
  });

  return plainText;
};
