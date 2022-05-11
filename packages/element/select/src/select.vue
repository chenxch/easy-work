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
  const vlaue = attrs.multiple !== undefined && attrs.multiple !== false ? attrs.modelValue : attrs.modelValue ? [attrs.modelValue] : []
  const lables = vlaue.reduce((prev, curr) => {
    const item = options.find(o => o.value === curr)
    if (item)
      prev.push(item.label)
    return prev
  }, [])
  return lables.join(',')
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
