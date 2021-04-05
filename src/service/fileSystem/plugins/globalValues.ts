import {DbPlugin} from "@/types/DbPlugin";

const mkv = (k: string, v: string) => ({ key: k, value: v })

const INDEX_NAME = 'gv'

const gv: DbPlugin = {
  install(db): Promise<string> {
    return new Promise(resolve => {
      const gv = db.createObjectStore(INDEX_NAME, { keyPath: 'key' })
      gv.transaction.oncomplete = function () {
        const t = db.transaction(INDEX_NAME, 'readwrite')
        const os = t.objectStore(INDEX_NAME)
        const base = [
          mkv('PATH', ''),
          mkv('PS1', 'root@jetdick $ ')
        ]

        base.forEach(value => {
          os.add(value)
        })

        t.oncomplete = () => {
          resolve(INDEX_NAME)
        }
      }
    })
  },
  name: INDEX_NAME
}

export default gv
