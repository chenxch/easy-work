import type { ExtractPropTypes } from 'vue'
import type TimePicker from './time-picker.vue'

export const timePickerProps = {
  toggle: { type: Boolean, default: false },
}
export type TimePickerProps = ExtractPropTypes<typeof timePickerProps>

export type TimePickerInstance = InstanceType<typeof TimePicker>
