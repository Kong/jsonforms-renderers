<template>
  <KInput
    v-model="control.data"
    :disabled="!control.enabled"
    :error="!!control.errors"
    :error-message="control.errors"
    :label="control.label"
    :label-attributes="labelAttributes"
    :placeholder="appliedOptions.placeholder"
    :required="control.required"
    :type="inputType"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { KInput } from '@kong/kongponents'
import { useJsonFormsControl } from '@jsonforms/vue'

import { useKongControl } from '../compositions/useKongControl'

import type { ControlElement } from '@jsonforms/core'
import type { RendererProps } from '@jsonforms/vue'

const props = defineProps<RendererProps<ControlElement>>()

const {
  control,
  appliedOptions,
  onChange,
} = useKongControl(useJsonFormsControl(props))

const isNumber = computed(() => control.value.schema.type === 'integer')
const isPassword = computed(() => control.value.schema.format === 'password')

const inputType = computed(() => {
  if (isPassword.value) {
    return 'password'
  }
  return isNumber.value ? 'number' : 'text'
})

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  let value: string | number = target.value
  if (isNumber.value) {
    value = Number(value)
  }
  onChange(value)
}

const labelAttributes = computed(() => {
  const ret = control.value.schema.description ? {
    info: control.value.schema.description,
    tooltipAttributes: { maxWidth: '400' },
  } : undefined
  return ret
})
</script>

<script lang="ts">
import type { RankedTester } from '@jsonforms/core'
import {
  rankWith,
  isStringControl,
} from '@jsonforms/core'

export const tester: RankedTester = rankWith(1, isStringControl)
</script>
