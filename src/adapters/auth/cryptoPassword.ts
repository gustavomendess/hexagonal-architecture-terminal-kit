import CryptographyProvider from "@/core/user/services/cryptographyProvider";
import bcrypt from 'bcrypt'

export default class CryptoPassword implements CryptographyProvider {
    encrypt(password: string): string {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }
}