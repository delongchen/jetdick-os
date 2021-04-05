<template>
  <line-out/>
  <cmd-input/>
  <line-expand/>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue';

import CmdInput from '@/components/LineInput/CmdInput.vue'
import LineOut from "@/components/LineOut/LineOut.vue";
import LineExpand from '@/components/LineOut/LineExpand.vue'

import { provideCmdContext } from "@/store/cmdHistory";
import {init} from "@/service/fileSystem/db";

export default defineComponent({
  name: 'App',
  components: {
    CmdInput,
    LineOut,
    LineExpand
  },
  setup() {
    provideCmdContext()
    init()
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
