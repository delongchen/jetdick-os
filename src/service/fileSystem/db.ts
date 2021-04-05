import { plugins } from './plugins'
import { cmdContext } from "@/store/cmdHistory";
import {fileContext} from "@/service/fileSystem/fileContxt";

const DB_NAME = 'jetdicks-file',
  DB_VERSION = 1
  // DB_STORE_NAME = 's'

export let DB: IDBDatabase

export function init(): Promise<IDBDatabase> {
  if (!window.indexedDB) {
    throw new Error('no indexedDB')
  }

  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)
    request.onerror = () => {
      reject(new Error('db open err'))
    }

    request.onsuccess = function () {
      resolve(DB = this.result)
    }

    request.onupgradeneeded = function() {
      const db = this.result
      plugins.map(plugin => plugin.install(db, cmdContext, fileContext))
        .reduce((pre, cur) => {
          return pre.then(() => cur)
            .then(cmdContext.println)
        }, Promise.resolve())
        .then(() => {
          cmdContext.println('plugins loaded')
        })
    }
  })
}
