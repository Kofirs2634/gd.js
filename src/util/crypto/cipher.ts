/**
 * Ciphers or deciphers a string with XOR encryption.
 * @param str The string to (de)cipher
 * @param key The key for the cipher
 * @returns The ciphered string
 * @internal
 */
const cipher = (str: string, key: string): string =>
  String.fromCodePoint(
    ...str.split('').map((char, i) => char.charCodeAt(0) ^ key.charCodeAt(i % key.length))
  );
/**
 * Encodes a string in a format compatible with the Geometry Dash servers.
 * @param str The string to encrypt
 * @param key The key for the cipher
 * @returns The encrypted string, prepared for use in Geometry Dash
 * @internal
 */
const encrypt = (str: string, key: string): string =>
  btoa(cipher(str, key))
    .replace(/\//g, '_')
    .replace(/\+/g, '-');
/**
 * Decodes a string encoded in a format generated by the Geometry Dash servers.
 * @param str The string to decrypt
 * @param key The key for the cipher
 * @returns The decrypted string
 * @internal
 */
const decrypt = (str: string, key: string): string =>
  cipher(atob(str.replace(/_/g, '/').replace(/-/g, '+')), key);
export { cipher, encrypt, decrypt };
