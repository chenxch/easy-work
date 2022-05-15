<script setup>
import { formItemContextKey } from '@easy-work/tokens'
import { defineProps, provide } from 'vue'
import { FormItem as AFormItem } from 'ant-design-vue'
import { formItemProps } from './index'

const props = defineProps(formItemProps)

provide(formItemContextKey, props)
</script>

<template>
  <AFormItem v-bind="$attrs">
    <slot name="default" />
  </AFormItem>
</template>
