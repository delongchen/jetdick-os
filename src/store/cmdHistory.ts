import {inject, provide, ref} from 'vue'
import {CmdContext} from "@/types/CmdContext";

const modName = 'CmdContext'
const CmdContextSymbol = Symbol(modName)

const history = ref(new Array<string>())

export const cmdContext = {
  history,
  println(t: string): void {
    history.value.push(t)
  },
  clear(): void {
    history.value.length = 0
  }
}

export const provideCmdContext = (): void => {
  provide<CmdContext>(CmdContextSymbol, cmdContext)
}

export const injectCmdContext = (): CmdContext => {
  const cmdContext = inject<CmdContext>(CmdContextSymbol)

  if (!cmdContext) {throw new Error()}

  return cmdContext
}
