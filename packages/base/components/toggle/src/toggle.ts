import { buildProps } from '@easy-work/utils'
import type { ExtractPropTypes } from 'vue'
import type Toggle from './toggle.vue'

export const toggleProps = buildProps({
  toggle: { type: Boolean, default: false },
} as const)
export type ToggleProps = ExtractPropTypes<typeof toggleProps>

export type ToggleInstance = InstanceType<typeof Toggle>
