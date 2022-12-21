

import { useMemo } from 'react'
import { constructor } from 'tsyringe/dist/typings/types'
import { container } from './use-case-container'


export function useResolve<T>(token: constructor<T> | string) {
  return useMemo(() => container.resolve(token), [token])
}