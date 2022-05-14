import type { ExtractPropTypes } from 'vue'
import type Select from './select.vue'

export const selectProps = {
  toggle: { type: Boolean, default: false },
}
export type SelectProps = ExtractPropTypes<typeof selectProps>

export type SelectInstance = InstanceType<typeof Select>
