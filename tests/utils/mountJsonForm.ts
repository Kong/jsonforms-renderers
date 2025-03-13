
import { mount } from '@vue/test-utils'

import TestJsonform from './TestJsonform.vue'
import { renderers } from '../../src/index'

import type { Props } from './TestJsonform.vue'

export const mountJsonform = (
  data: Props['data'],
  uischema: Props['uischema'],
  schema: Props['schema'],
) => {
  return mount(TestJsonform, {
    props: {
      renderers,
      schema,
      uischema,
      data,
    },
  })
}
