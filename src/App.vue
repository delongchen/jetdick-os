<template>
  <line-out/>
  <cmd-input/>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue';

import CmdInput from '@/components/LineInput/CmdInput.vue'
import LineOut from "@/components/LineOut/LineOut.vue";

import { provideCmdContext } from "@/store/cmdHistory";

export default defineComponent({
  name: 'App',
  components: {
    CmdInput,
    LineOut
  },
  setup() {
    provideCmdContext()

    const ps1 = ref('root@dick$ ')
    provide('ps1', ps1)
  }
});
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: black;
  color: white;
  cursor: text;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100%;
}
</style>
