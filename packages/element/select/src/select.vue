<script setup>
import { EgToggle } from '@easy-work/base'
import { formContextKey } from '@easy-work/tokens'
import { ElSelect } from 'element-plus'
import { defineProps, useAttrs, useSlots, inject } from 'vue'
import { selectProps } from './index'
const props = defineProps(selectProps)
const slots = useSlots()
const attrs = useAttrs()
const elFrom = inject(formContextKey, {})
const getText = () => {
  const options = slots.default()[0].children.map(o => o.props)
  const vlaue = attrs.multiple !== undefined && attrs.multiple !== false ? attrs.modelValue : attrs.modelValue ? [attrs.modelValue] : []
  const lables = vlaue.reduce((prev, curr) => {
    const item = options.find(o => o.value === curr)
    if (item)
      prev.push(item.label)
    return prev
  }, [])
  return lables.join(',')
}
</script>

<template>
  <EgToggle :toggle="toggle||elFrom.toggle">
    <ElSelect v-bind="$attrs">
      <slot name="default" />
    </ElSelect>
    <template #toggle>
      <slot name="content" />
      <template v-if="!slots.content">
        {{ getText() }}
      </template>
    </template>
  </EgToggle>
</template>
