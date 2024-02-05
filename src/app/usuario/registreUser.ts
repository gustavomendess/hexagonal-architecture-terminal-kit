import TerminalUtil from "@/app/util/terminalUtil";
import User from "@/core/user/model/user";
import UserRegister from "@/core/user/services/userRegister"
//import InvertCryptoPassword from "@/core/user/services/invertCryptoPassword";
//import SpacePasswordCrypto from "@/adapters/auth/spacePasswordCrypto";
import CryptoPassword from "@/adapters/auth/cryptoPassword";
//import UserInMemory from "@/adapters/db/userInMemory";
import UserInPg from "@/adapters/db/userInPg";

export default async function registreUser() {
    const { buildRequiredField,  title, success, error, waitEnter } = TerminalUtil
    title('Registrar usuário')

    const name = await buildRequiredField('name: ')
    const email = await buildRequiredField('email: ')
    const password = await buildRequiredField('password: ')

    const user: User = { name, email, password }

    try {
        //const cryptoProvider = new InvertCryptoPassword()
        //const cryptoProvider = new SpacePasswordCrypto()
        //const repository = new UserInMemory()
        const repository = new UserInPg()
        const cryptoProvider = new CryptoPassword()
        const useCase = new UserRegister(repository, cryptoProvider)

        await useCase.execute(user)
        success('Usuário registrado com sucesso')
    } catch (e: any) {
        error(e.message)
    } finally {
        await waitEnter()
    }

}