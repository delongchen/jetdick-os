import {Ref} from "vue";

export type CmdContext = {
  history: Ref<string[]>,
  println: (t: string) => void,
  clear: () => void
}
