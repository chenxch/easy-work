<script setup>
import { EgToggle } from '@easy-work/base'
import { formContextKey } from '@easy-work/tokens'
import { useToggle } from '@easy-work/hooks'
import { Select as ASelect } from 'ant-design-vue'
import { defineProps, useAttrs, useSlots } from 'vue'
import { selectProps } from './index'
const props = defineProps(selectProps)
const slots = useSlots()
const attrs = useAttrs()
const getText = () => {
  const options = attrs.options || slots?.default()?.reduce((cur, pre)=>{
    if(pre.children){
      let list = pre.children
      if(!Array.isArray(pre.children)){
        list = [pre.children]
      }
      cur = cur.concat(list.map(o=> ({label:o.children?.default()?.[0]?.children, value: o.props.value})))
    }else {
      cur.push(pre.props)
    }
    return cur
  },[])
  const vlaue = attrs.multiple !== undefined && attrs.multiple !== false ? attrs.value : attrs.value ? [attrs.value] : []
  const lables = vlaue.reduce((prev, curr) => {
    const item = options.find(o => o.value === curr)
    if (item)
      prev.push(item.label)
    return prev
  }, [])
  return lables.join(',')
}

const disyplyToggle = useToggle()
</script>

<template>
  <EgToggle :toggle="disyplyToggle">
    <ASelect v-bind="$attrs">
      <slot name="default" />
    </ASelect>
    <template #toggle>
      <slot name="content" />
      <template v-if="!slots.content">
        {{ getText() }}
      </template>
    </template>
  </EgToggle>
</template>
