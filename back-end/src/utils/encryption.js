const alphabet = require('./alphabet');

const dotenv = require('dotenv');
dotenv.config();

function encryption (value) {
  let hash = process.env.HASH_KEY;
  const plainText = value;
  
  hash += plainText?.substring(0, plainText.length - hash.length);

  const hashToArray = hash?.split('');
  const plainTextToArray = plainText?.split('');

  let indexOfItemsHash = [];
  hashToArray?.forEach(item => {
    indexOfItemsHash.push(alphabet.indexOf(item));
  });

  let indexOfItemsPlainText = [];
  plainTextToArray?.forEach(item => {
    indexOfItemsPlainText.push(alphabet.indexOf(item));
  });

  let indexOfEncryptedText = [];
  for (let i = 0; i < indexOfItemsHash.length; i++) {
    let result = indexOfItemsHash[i] + indexOfItemsPlainText[i];

    if (result > alphabet.length - 1) {
      result = result - alphabet.length;
    }

    indexOfEncryptedText.push(result);
  };

  let encryptedText = "";
  indexOfEncryptedText?.forEach(item => {
    encryptedText += alphabet[item];
  });

  return encryptedText;
};

module.exports = encryption;