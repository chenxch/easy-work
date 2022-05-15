<script setup>
import { EgToggle } from '@easy-work/base'
import { formContextKey } from '@easy-work/tokens'
import { useToggle } from '@easy-work/hooks'
import { ElTimePicker } from 'element-plus'
import { defineProps, useAttrs, useSlots } from 'vue'
import { timePickerProps } from './index'
import dayjs from 'dayjs'
const props = defineProps(timePickerProps)
const slots = useSlots()
const attrs = useAttrs()
const getText = () => {
  const vlaue = attrs.modelValue
  const format = attrs.format || 'HH:mm:ss'
  return vlaue ? dayjs(vlaue).format(format) : ''
}
const disyplyToggle = useToggle()
</script>

<template>
  <EgToggle :toggle="disyplyToggle">
    <ElTimePicker v-bind="$attrs">
      <slot name="default" />
    </ElTimePicker>
    <template #toggle>
      <slot name="content" />
      <template v-if="!slots.content">
        {{ getText() }}
      </template>
    </template>
  </EgToggle>
</template>
