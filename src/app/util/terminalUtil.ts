import {Terminal, terminal} from 'terminal-kit'

export default class TerminalUtil {
    static title(texto: string) {
        terminal.clear()
        terminal.magenta(`${texto}\n`)
        terminal.magenta(`-`.repeat(texto.length) + `\n`)
    }

    static clear() {
        terminal.clear()
    }

    static showKeyAndValue(key: string, value: any) {
        terminal.yellow(key).green(value).white(`\n`)
    }

    static async menu(options: string[]): Promise<[number, string]> {
        const response = await terminal.singleColumnMenu(options).promise
        return [response.selectedIndex, response.selectedText]
    }

    static async confirmation(text: string): Promise<boolean> {
        terminal.yellow(`\n${text}`)
        const response = await terminal.singleLineMenu(['Yes', 'No']).promise
        return response.selectedIndex === 0
    }

    static async select(text: string, options: string[]): Promise<[number, string]> {
        terminal.yellow(`\n${text}`)
        const response = await terminal.singleLineMenu(options).promise
        return [response.selectedIndex, response.selectedText]
    }

    static async waitEnter(): Promise<void> {
        terminal.white('\nPressione ENTER para continuar...')
        await terminal.inputField({ echo: false }).promise
    }

    static async buildRequiredField(label: string, defaultValue: string = ''): Promise<string> {
        terminal.yellow(`\n${label}`)
        const value = await terminal.inputField({ default: defaultValue }).promise

        if(value) return value

        return TerminalUtil.buildRequiredField(label)
    }

    static async success(text: string, newLine: boolean = true) {
        terminal.green((newLine ? `\n` :  '') + text)
    }

    static async error(text: string, newLine: boolean = true) {
        terminal.red((newLine ? `\n` :  '') + text)
    }
}