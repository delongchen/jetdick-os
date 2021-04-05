import gv from "@/service/fileSystem/plugins/globalValues";
import {DbPlugin} from "@/types/DbPlugin";

const plugins = new Array<DbPlugin>()

plugins.push(gv)

export {
  plugins
}
