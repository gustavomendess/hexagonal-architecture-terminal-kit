import TerminalUtil from "@/app/util/terminalUtil";
import * as process from "process";
import menuFundamentos from "@/app/menu/menuFundamentos";
import menuUsuario from "@/app/menu/menuUsuario";

export default async function menuPrincipal() {
    TerminalUtil.title('Menu principal')

    const [index] = await TerminalUtil.menu([
      '1. Fundamentos',
      '2. Usuário',
      'Sair'
    ])

    switch (index) {
        case 0: await menuFundamentos(); break
        case 1: await menuUsuario(); break
        default:
            process.exit(0)
    }

    await menuPrincipal()
}