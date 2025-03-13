<template>
  <div class="json-forms-demo">
    <div class="form-container">
      <JsonForms
        :data="data"
        :renderers="renderers"
        :schema="schema"
        :uischema="uischema"
        @change="onChange"
      />
    </div>
    <div class="output-container">
      <h3>Form Output</h3>
      <pre class="output-data">{{ JSON.stringify(data, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { JsonForms } from '@jsonforms/vue'

import { renderers } from '..'

import type { JsonSchema, Scoped, UISchemaElement } from '@jsonforms/core'

const { data: initialData } = defineProps<{
  schema: JsonSchema
  uischema: UISchemaElement & Scoped
  data: any
}>()

const data = ref(initialData)

const onChange = (event: any) => {
  data.value = event.data
}
</script>

<style scoped>
.json-forms-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-container {
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 6px;
  border: 1px solid #eee;
}

.output-container {
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 6px;
  border: 1px solid #eee;
}

.output-data {
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
  font-family: monospace;
  font-size: 14px;
  margin: 0;
}

h3 {
  margin-top: 0;
  margin-bottom: 10px;
}
</style>
