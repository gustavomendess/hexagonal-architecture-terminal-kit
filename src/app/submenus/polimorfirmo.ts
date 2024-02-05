import TerminalUtil from "@/app/util/terminalUtil";
import {Terminal} from "terminal-kit";
import Ferrari from "@/core/fundamentos/ferrari";
import Fusca from "@/core/fundamentos/fusca";
import Car from "@/core/fundamentos/car";

export default async function polimorfismo() {
    TerminalUtil.title('Polimorfirmo')

    const [carType] = await TerminalUtil.select('Tipo de carro?', ['Ferrari', 'Fusca'])
    const car: Car = carType === 0 ? new Ferrari() : new Fusca()


    while (true) {
        TerminalUtil.clear()
        TerminalUtil.showKeyAndValue('Velocidade maxima: ', `${car.maxVelocity} km/h`)
        TerminalUtil.showKeyAndValue('Velocidade atual: ', `${car.currentVelocity} km/h`)

        const [option] = await TerminalUtil.select('Qual opçẽo?', ['Acelerar', 'Frear'])

        option === 0 ? car.speedUp() : car.brake()

        const proceed = await TerminalUtil.confirmation(`Deseja Continuar? Velocidade atual ${ car.currentVelocity } km/h`)
        if (!proceed) return
    }
}