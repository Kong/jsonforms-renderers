<template>
  <JsonForms
    :data="data"
    :renderers="renderers"
    :schema="schema"
    :uischema="uischema"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { JsonForms } from '@jsonforms/vue'

import type { JsonFormsRendererRegistryEntry, JsonSchema, Scoped, UISchemaElement } from '@jsonforms/core'

export type Props = {
  schema: JsonSchema
  uischema: UISchemaElement & Scoped
  data: any
  renderers: JsonFormsRendererRegistryEntry[]
}

const { data: initialData } = defineProps<Props>()

const data = ref(initialData)

const onChange = (event: any) => {
  data.value = event.data
}
</script>
