import {inject, provide, Ref, ref} from 'vue'

const modName = 'CmdContext'

type CmdContext = {
    history: Ref<string[]>
}

const CmdContextSymbol = Symbol(modName)

export const provideCmdContext = (): void => {
    const history = ref(new Array<string>())

    provide(CmdContextSymbol, {
        history
    })
}

export const injectCmdContext = (): CmdContext => {
    const cmdContext = inject<CmdContext>(CmdContextSymbol)

    if (!cmdContext) {
        throw new Error()
    }

    return cmdContext
}
