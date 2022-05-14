import type { InjectionKey } from 'vue'

interface FormProps {
  toggle: boolean
}

export type FormContext = FormProps

export const formContextKey: InjectionKey<FormContext>
  = Symbol('egFormContextKey')
