import type { JsonFormsRendererRegistryEntry } from '@jsonforms/core'
import { markRaw } from 'vue'

import { default as KCheckBoxControlRenderer, tester as checkBoxTester } from './KCheckBoxRenderer.vue'
import { default as KToggleRenderer, tester as toggleTester } from './KToggleRenderer.vue'
import { default as KInputControlRenderer, tester as inputTester } from './KInputControlRenderer.vue'
import { default as KTextAreaControlRenderer, tester as textAreaTester } from './KTextAreaControlRenderer.vue'
import { default as KNumberControlRenderer, tester as numberTester } from './KNumberControlRenderer.vue'

export default [
  { tester: checkBoxTester, renderer: markRaw(KCheckBoxControlRenderer) },
  { tester: toggleTester, renderer: markRaw(KToggleRenderer) },
  { tester: inputTester, renderer: markRaw(KInputControlRenderer) },
  { tester: textAreaTester, renderer: markRaw(KTextAreaControlRenderer) },
  { tester: numberTester, renderer: markRaw(KNumberControlRenderer) },
] as JsonFormsRendererRegistryEntry[]
