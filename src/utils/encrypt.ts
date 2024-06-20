import CryptoJS from "crypto-js";

function newEncryptAmiAES(
  password: string,
  plainText: string,
  config = { keySize: 256, iterations: 1 }
) {
  const { keySize } = config;
  const { iterations } = config;
  const salt = CryptoJS.lib.WordArray.random(128 / 8);
  const key = CryptoJS.PBKDF2(password, salt, {
    keySize: keySize / 32,
    hasher: CryptoJS.algo.SHA512,
    iterations: iterations,
  });
  const iv = CryptoJS.lib.WordArray.random(128 / 8);
  const encrypted = CryptoJS.AES.encrypt(plainText, key, {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  });
  const encryptedMessage =
    encrypted.toString() + iv.toString() + salt.toString();
  return encryptedMessage;
}

export function encryptAmiAES(
  plainText: string,
  config = { keySize: 256, iterations: 1 }
) {
  return newEncryptAmiAES(
    import.meta.env.VITE_ENCRYPT_SECURITY_HASH,
    plainText,
    config
  );
}
