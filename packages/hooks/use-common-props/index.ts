import { computed, inject, unref,getCurrentInstance } from 'vue'
import { formContextKey, formItemContextKey } from '@easy-work/tokens'
import type { MaybeRef } from '@vueuse/core'
import type { ComputedRef } from 'vue'

export const useProp = <T>(name: string): ComputedRef<T | undefined> => {
  const vm = getCurrentInstance()!
  return computed(() => vm.proxy?.$props[name] ?? undefined)
}



export const useToggle = (fallback?: MaybeRef<boolean | undefined>) => {
  const toggle = useProp<boolean>('toggle')
  const form = inject(formContextKey, undefined)
  const formItem = inject(formItemContextKey, undefined)
  return computed(
    () => toggle.value || unref(fallback) || form?.toggle || formItem?.toggle || false
  )
}
