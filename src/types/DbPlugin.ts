import {CmdContext} from "@/types/CmdContext";
import {FileContext} from "@/types/FileContext";

type DbPluginHandler = (
  db: IDBDatabase,
  cmdContext: CmdContext,
  fileContext: FileContext
) => Promise<string>

export type DbPlugin = {
  install: DbPluginHandler,
  name: string
}
