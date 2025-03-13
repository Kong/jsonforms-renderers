<template>
  <KCheckbox
    v-model="control.data"
    :disabled="!control.enabled"
    :error="!!control.errors"
    :label="control.label"
    :label-attributes="labelAttributes"
    :required="control.required"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { KCheckbox } from '@kong/kongponents'
import { useJsonFormsControl } from '@jsonforms/vue'

import { useKongControl } from '../compositions/useKongControl'

import type { ControlElement } from '@jsonforms/core'
import type { RendererProps } from '@jsonforms/vue'

const props = defineProps<RendererProps<ControlElement>>()

const {
  control,
  onChange,
} = useKongControl(useJsonFormsControl(props))

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
  isBooleanControl,
} from '@jsonforms/core'

export const tester: RankedTester = rankWith(1, isBooleanControl)
</script>
