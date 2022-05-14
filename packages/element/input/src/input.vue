<script setup>
import { EgToggle } from '@easy-work/base'
import { formContextKey } from '@easy-work/tokens'
import { useToggle } from '@easy-work/hooks'
import { ElInput } from 'element-plus'
import { defineProps, useSlots } from 'vue'
import { inputProps } from './index'
const props = defineProps(inputProps)
const slots = useSlots()
const dislayToggle = useToggle()
</script>

<template>
  <EgToggle :toggle="dislayToggle">
    <ElInput v-bind="$attrs" />
    <template #toggle>
      <slot name="content" />
      <div v-if="!slots.content">
        {{ $attrs.modelValue }}
      </div>
    </template>
  </EgToggle>
</template>
