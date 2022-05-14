<script setup>
import { formItemContextKey } from '@easy-work/tokens'
import { defineProps, provide } from 'vue'
import { ElFormItem } from 'element-plus'
import { formItemProps } from './index'

const props = defineProps(formItemProps)

provide(formItemContextKey, props)
</script>

<template>
  <ElFormItem v-bind="$attrs">
    <slot name="default" />
  </ElFormItem>
</template>
