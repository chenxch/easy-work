import type { ExtractPropTypes } from 'vue'
import type Toggle from './toggle.vue'

export const toggleProps = {
  toggle: { type: Boolean, default: false },
}
export type ToggleProps = ExtractPropTypes<typeof toggleProps>

export type ToggleInstance = InstanceType<typeof Toggle>
