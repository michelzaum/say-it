const alphabet = require('./alphabet');

const dotenv = require('dotenv');
dotenv.config();

function encryption () {
  let hash = process.env.HASH_KEY;
  const plainText = "senha123";
  
  hash += plainText.substring(0, plainText.length - hash.length);

  const hashToArray = hash.split('');
  const plainTextToArray = plainText.split('');

  let indexOfItemsHash = [];
  hashToArray.forEach(item => {
    indexOfItemsHash.push(alphabet.indexOf(item));
  });

  let indexOfItemsPlainText = [];
  plainTextToArray.forEach(item => {
    indexOfItemsPlainText.push(alphabet.indexOf(item));
  });

  let indexOfEncryptedText = [];
  for (let i = 0; i < indexOfItemsHash.length; i++) {
    indexOfEncryptedText.push(indexOfItemsHash[i] + indexOfItemsPlainText[i]);
  };

  let encryptedText = "";
  indexOfEncryptedText.forEach(item => {
    if (item > alphabet.length - 1) {
      item = item - alphabet.length;
    };

    encryptedText += alphabet[item];
  });

  return encryptedText;
};

encryption();