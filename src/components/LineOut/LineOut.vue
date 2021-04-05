<template>
  <div>
    <p v-for="(v, k) in history"
       :key="`his-${k}`"
       class="logs"
    >{{ v }}</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {injectCmdContext} from "@/store/cmdHistory";

export default defineComponent({
  name: "LineOut",
  setup() {
    const {history, println} = injectCmdContext()

    return {
      history,
      println
    }
  }
})
</script>

<style scoped>

</style>
