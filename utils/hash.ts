import { createCipheriv, createDecipheriv } from 'crypto'

// The below one is the algorithm we are using to encrypt
const algorithm = 'aes-256-cbc'

// Taking the Key and iv values from the environment variables
const keyHex = process.env.KEY as string
const ivHex = process.env.IV as string

// converting the key and iv values to buffer values
const key = Buffer.from(keyHex, 'hex')
const iv = Buffer.from(ivHex, 'hex')

// The below function is used to encrypt the value you pass to it
const encryptPassword = (password: string): string => {
  const cipher = createCipheriv(algorithm, key, iv)
  let encrypted = cipher.update(password, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return encrypted
}

// The below function is used to decrypt the encrypted value passed to it
const decryptPassword = (encryptedPassword: string): string => {
  const decipher = createDecipheriv(algorithm, key, iv)
  let decrypted = decipher.update(encryptedPassword, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

// exporting the functions so that they can be used in another files
export { encryptPassword, decryptPassword }
