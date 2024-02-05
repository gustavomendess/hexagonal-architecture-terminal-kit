import TerminalUtil from "@/app/util/terminalUtil";
import UserRegister from "@/app/usuario/registreUser";
export default async function menuUsuario() {
    TerminalUtil.title('Usuários')

    const [index] = await TerminalUtil.menu([
        '1. Registrar',
        '2. Sair'
    ])

    switch (index) {
        case 0:
            await UserRegister()
            break
        default:
            return
    }
}