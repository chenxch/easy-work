<script setup>
import { EgToggle } from '@easy-work/base'
import { ElInput } from 'element-plus'
import { defineProps } from 'vue'
import { inputProps } from './index'
const props = defineProps(inputProps)
</script>

<template>
  <EgToggle :toggle="toggle">
    <ElInput v-bind="$attrs" />
    <template #toggle>
      {{ $attrs.modelValue }}
    </template>
  </EgToggle>
</template>
