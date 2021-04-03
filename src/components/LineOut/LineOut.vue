<template>
  <div>
    <p v-for="(v, k) in history"
       :key="`his-${k}`"
       class="logs"
    >{{ps1}} {{ v }}</p>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject} from 'vue'
import {injectCmdContext} from "@/store/cmdHistory";

export default defineComponent({
  name: "LineOut",
  setup() {
    const { history } = injectCmdContext()
    const ps1 = inject<string>('ps1', '')

    return {
      history,
      ps1,
    }
  }
})
</script>

<style scoped>

</style>
