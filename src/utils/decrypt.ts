import CryptoJS from "crypto-js";

function newDecryptAmiAES(
  password: string,
  encryptedMessage: string,
  config = { keySize: 256, iterations: 1 }
) {
  const { keySize } = config;
  const { iterations } = config;
  const salt = CryptoJS.enc.Hex.parse(
    encryptedMessage.substr(encryptedMessage.length - 32)
  );
  const iv = CryptoJS.enc.Hex.parse(
    encryptedMessage.substr(encryptedMessage.length - 64, 32)
  );
  const encrypted = encryptedMessage.substr(0, encryptedMessage.length - 64);
  const key = CryptoJS.PBKDF2(password, salt, {
    keySize: keySize / 32,
    hasher: CryptoJS.algo.SHA512,
    iterations: iterations,
  });
  const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  });
  const decryptedMessage = decrypted.toString(CryptoJS.enc.Utf8);
  if (!decryptedMessage) {
    throw new Error("Decrypt Error");
  }
  return decryptedMessage;
}

export function decryptAmiAES(
  plainText: string,
  config = { keySize: 256, iterations: 1 }
) {
  return newDecryptAmiAES(
    import.meta.env.VITE_ENCRYPT_SECURITY_HASH,
    plainText,
    config
  );
}
