<template>
  <span class="ps1">{{ ps1 }}</span>
  <label>
    <input
      type="text"
      class="cmd-input"
      v-model="cmd"
      @keyup="keyHandler">
  </label>
</template>

<script lang="ts">
import {defineComponent, inject, ref} from 'vue'
import {injectCmdContext} from "@/store/cmdHistory";

export default defineComponent({
  name: "CmdInput",
  setup() {
    const { history } = injectCmdContext()
    const ps1 = inject<string>('ps1', '')
    const cmd = ref('')

    function keyHandler(ev: KeyboardEvent) {
      ev.preventDefault()
      if (ev.code === 'Enter') {
        history.value.push(cmd.value)
        cmd.value = ''
      }
    }

    return {
      history,
      keyHandler,
      cmd,
      ps1
    }
  }
})
</script>

<style scoped>
.cmd-input {
  display: inline-block;
  background-color: transparent;
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: 0;
  box-sizing: border-box;
  width: 300px;
  padding-block-end: 0
}

.ps1, .cmd-input {
  font-size: 17px;
  font-family: Monaco, Cutive Mono, Courier New, Consolas, monospace;
  font-weight: 700;
  color: #fff;
}
</style>
