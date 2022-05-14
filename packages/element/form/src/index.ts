import type { ExtractPropTypes } from 'vue'
import type Form from './form.vue'

export const formProps = {
  toggle: { type: Boolean, default: false },
}
export type FormProps = ExtractPropTypes<typeof formProps>

export type FormInstance = InstanceType<typeof Form>
