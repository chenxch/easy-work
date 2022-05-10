<script lang="ts" setup>
import { defineProps } from 'vue'
import { toggleProps } from './index'
const props = defineProps(toggleProps)
</script>

<template>
  <div>
    <slot v-if="!toggle" name="default" />
    <slot v-else name="toggle" />
  </div>
</template>
