import { withInstall } from '@easy-work/utils'

import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

export const EgForm = withInstall(Form)
export default EgForm


export const EgFormItem = withInstall(FormItem)

export * from './src/index'
