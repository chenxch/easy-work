<script setup>
import { defineProps, provide } from 'vue'
import { Form as AForm } from 'ant-design-vue'
import { formProps } from './index'
import { formContextKey } from '@easy-work/tokens'

const props = defineProps(formProps)

provide(formContextKey, props)
</script>

<template>
  <AForm v-bind="$attrs">
    <slot name="default" />
  </AForm>
</template>
