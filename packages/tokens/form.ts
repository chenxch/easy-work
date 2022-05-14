import type { InjectionKey } from 'vue'

interface FormProps {
  toggle: boolean
}

interface FormItemProps {
  toggle: boolean
}

export type FormContext = FormProps

export type FormItemContext = FormItemProps

export const formContextKey: InjectionKey<FormContext>
  = Symbol('egFormContextKey')

export const formItemContextKey: InjectionKey<FormItemContext>
  = Symbol('egFormItemContextKey')