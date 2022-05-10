<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
import { EgToggle } from '@easy-work/base'
import { EgInput, EgSelect } from '@easy-work/element'
import HelloWorld from './components/HelloWorld.vue'
const toggle = ref(false)
const text = ref('')

const value = ref('')

const options = [
  {
    value: '1',
    label: 'Option1',
  },
  {
    value: '2',
    label: 'Option2',
  },
  {
    value: '3',
    label: 'Option3',
  },
  {
    value: '4',
    label: 'Option4',
  },
  {
    value: '5',
    label: 'Option5',
  },
]
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <EgToggle>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <template #toggle>
      xc
    </template>
  </EgToggle>
  <button @click="toggle = !toggle">
    toggle
  </button>
  <EgInput v-model="text" :toggle="toggle" />
  <EgSelect v-model="value" class="m-2" placeholder="Select" :toggle="toggle">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </EgSelect>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
