import { randomBytes, createCipheriv, createDecipheriv } from 'crypto'

const algorithm = 'aes-256-cbc'

const keyHex = process.env.KEY as string
const ivHex = process.env.IV as string

const key = Buffer.from(keyHex, 'hex')
const iv = Buffer.from(ivHex, 'hex')

// Encrypting a password
const encryptPassword = (password: string): string => {
  const cipher = createCipheriv(algorithm, key, iv)
  let encrypted = cipher.update(password, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return encrypted
}

// Decrypting a password
const decryptPassword = (encryptedPassword: string): string => {
  const decipher = createDecipheriv(algorithm, key, iv)
  let decrypted = decipher.update(encryptedPassword, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

export { encryptPassword, decryptPassword }
