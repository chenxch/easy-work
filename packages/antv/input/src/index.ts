import type { ExtractPropTypes } from 'vue'
import type Input from './input.vue'

export const inputProps = {
  toggle: { type: Boolean, default: false },
}
export type InputProps = ExtractPropTypes<typeof inputProps>

export type InputInstance = InstanceType<typeof Input>
