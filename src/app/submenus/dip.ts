import TerminalUtil from "@/app/util/terminalUtil";
import run from "@/core/fundamentos/run";
import Ferrari from "@/core/fundamentos/ferrari";
import Fusca from "@/core/fundamentos/fusca";
import Civic from "@/core/fundamentos/civic";
import { terminal } from "terminal-kit";

export default async function dip() {
    TerminalUtil.title('DIP')

    const [type] = await TerminalUtil.select('Tipo de carro?', ['Fusca', 'Ferrari', 'Civic'])

    let car
    switch (type) {
        case 0:
            car = new Fusca()
            break
        case 1:
            car = new Ferrari()
            break
        default:
            car = new Civic()
            break
    }

    run(car, terminal.gray)
    await TerminalUtil.waitEnter()
}