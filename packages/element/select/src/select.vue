<script setup>
import { EgToggle } from '@easy-work/base'
import { ElSelect } from 'element-plus'
import { computed, defineProps, useAttrs, useSlots } from 'vue'
import { inputProps } from './index'
const props = defineProps(inputProps)
const slots = useSlots()
const options = slots.default()[0].children.map(o => o.props)
const attrs = useAttrs()
const text = computed(() => {
  return options.find(o => o.value === attrs.modelValue).label
})
</script>

<template>
  <EgToggle :toggle="toggle">
    <ElSelect v-bind="$attrs">
      <slot name="default" />
    </ElSelect>
    <template #toggle>
      {{ text }}
    </template>
  </EgToggle>
</template>
