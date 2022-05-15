import type { ExtractPropTypes } from 'vue'
import type DatePicker from './date-picker.vue'

export const datePickerProps = {
  toggle: { type: Boolean, default: false },
}
export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>

export type DatePickerInstance = InstanceType<typeof DatePicker>
