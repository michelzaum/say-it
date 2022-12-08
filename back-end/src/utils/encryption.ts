import { alphabet } from './alphabet';
import dotenv from 'dotenv';

dotenv.config();

export function encryption (value: string): string {
  let hash: string = process.env.HASH_KEY || "";
  const plainText: string = value;
  
  hash += plainText?.substring(0, plainText.length - hash.length);

  const hashToArray: Array<string> = hash?.split('');
  const plainTextToArray: Array<string> = plainText?.split('');

  const indexOfItemsHash: Array<number> = [];
  hashToArray?.forEach((item: string) => {
    indexOfItemsHash.push(alphabet.indexOf(item));
  });

  const indexOfItemsPlainText: Array<number> = [];
  plainTextToArray.forEach((item: string) => {
    indexOfItemsPlainText.push(alphabet.indexOf(item));
  });

  const indexOfEncryptedText: Array<number> = [];
  for (let i = 0; i < indexOfItemsHash.length; i++) {
    let result: number = indexOfItemsHash[i] + indexOfItemsPlainText[i];

    if (result > alphabet.length - 1) {
      result = result - alphabet.length;
    };

    indexOfEncryptedText.push(result);
  };

  let encryptedText: string = "";
  indexOfEncryptedText.forEach((item: number) => {
    encryptedText += alphabet[item];
  });

  return encryptedText;
};
