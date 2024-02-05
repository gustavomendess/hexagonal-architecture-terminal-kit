import TerminalUtil from "@/app/util/terminalUtil";
import polimorfismo from "@/app/submenus/polimorfirmo";
import dip from "@/app/submenus/dip";

export default async function menuFundamentos() {
    TerminalUtil.title('Fundamentos')

    const [index] = await TerminalUtil.menu([
        '1. Polimorfismo',
        '2. DIP',
        'Voltar',
    ])

    switch (index) {
        case 0:
            await polimorfismo()
            break
        case 1:
            await dip()
            break
        default:
            return
    }

    await menuFundamentos()
}