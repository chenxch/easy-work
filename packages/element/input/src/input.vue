<script setup>
import { EgToggle } from '@easy-work/base'
import { formContextKey } from '@easy-work/tokens'
import { ElInput } from 'element-plus'
import { defineProps, useSlots,inject } from 'vue'
import { inputProps } from './index'
const props = defineProps(inputProps)
const slots = useSlots()
const elForm = inject(formContextKey, {})
</script>

<template>
  <EgToggle :toggle="toggle||elForm.toggle">
    <ElInput v-bind="$attrs" />
    <template #toggle>
      <slot name="content" />
      <template v-if="!slots.content">
        {{ $attrs.modelValue }}
      </template>
    </template>
  </EgToggle>
</template>
