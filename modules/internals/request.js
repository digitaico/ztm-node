const encrypt = (data) => {
  return 'encrypted data';
}

export const send = (url, data) => {
  const encryptedData = encrypt(data);
  console.log(`... sending ${encryptedData} request to ${url} ...`)
}
