<script setup>
import { EgToggle } from '@easy-work/base'
import { formContextKey } from '@easy-work/tokens'
import { useToggle } from '@easy-work/hooks'
import { ElDatePicker } from 'element-plus'
import { defineProps, useAttrs, useSlots } from 'vue'
import { datePickerProps } from './index'
import dayjs from 'dayjs'
const props = defineProps(datePickerProps)
const slots = useSlots()
const attrs = useAttrs()
const getText = () => {
  const vlaue = attrs.modelValue
  const format = attrs.format || attrs.type === 'datetime' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
  return vlaue ? dayjs(vlaue).format(format) : ''
}
const disyplyToggle = useToggle()
</script>

<template>
  <EgToggle :toggle="disyplyToggle">
    <ElDatePicker v-bind="$attrs">
      <slot name="default" />
    </ElDatePicker>
    <template #toggle>
      <slot name="content" />
      <template v-if="!slots.content">
        {{ getText() }}
      </template>
    </template>
  </EgToggle>
</template>
