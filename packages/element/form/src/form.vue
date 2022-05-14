<script setup>
import { formContextKey } from '@easy-work/tokens'
import { defineProps, provide } from 'vue'
import { ElForm } from 'element-plus'
import { formProps } from './index'

const props = defineProps(formProps)

provide(formContextKey, props)
</script>

<template>
  <ElForm v-bind="$attrs">
    <slot name="default" />
  </ElForm>
</template>
