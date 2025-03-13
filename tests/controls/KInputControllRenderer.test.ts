import { expect, test } from 'vitest'

import { mountJsonform } from '../utils/mountJsonForm'
import type { Props } from '../utils/TestJsonform.vue'

const uischema: Props['uischema'] = {
  type: 'Control',
  scope: '#/properties/name',
  options: {
    placeholder: 'Enter your name',
  },
}

const schema: Props['schema'] = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: 'Name',
      description: 'Please enter your name',
    },
  },
}

const schemaRequired: Props['schema'] = {
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string',
      title: 'Name',
    },
  },
}

const schemaReadonly: Props['schema'] = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: 'Name',
      readOnly: true,
    },
  },
}

test('renders a string input', () => {
  const wrapper = mountJsonform({}, uischema, schema)
  expect(wrapper.find('input').exists()).to.be.true
})

test('renders title as label', () => {
  const wrapper = mountJsonform({}, uischema, schema)
  expect(wrapper.find('label').text()).contains('Name')
})

test('emits a data change', async () => {
  const wrapper = mountJsonform({}, uischema, schema)
  const input = wrapper.find('input')
  await input.setValue('b')
  expect(wrapper.vm.data).to.deep.equal({ name: 'b' })
})

test('should has a placeholder', () => {
  const wrapper = mountJsonform({}, uischema, schema)
  const input = wrapper.find('input')
  const placeholder = input.attributes('placeholder')
  expect(placeholder).to.equal(uischema.options!.placeholder)
})

test('should has a label with required class and asterisk symbol', () => {
  const wrapper = mountJsonform({}, uischema, schemaRequired)
  expect(wrapper.find('.k-label.required').exists()).to.be.true
})

test('should has description tooltip', async () => {
  const wrapper = mountJsonform({}, uischema, schema)
  expect(wrapper.find('.k-popover').exists()).to.be.true
  await wrapper.find('.k-popover').trigger('mouseover')
  expect(wrapper.find('.popover').exists()).to.be.true
  expect(wrapper.find('.popover').text()).to.equal(schema.properties!.name.description)
})

test('should has initial value', () => {
  const data = { name: 'John' }
  const wrapper = mountJsonform(data, uischema, schema)
  expect(wrapper.find('input').element.value).to.equal(data.name)
})

test('should disable', () => {
  const wrapper = mountJsonform({}, uischema, schemaReadonly)
  expect(wrapper.find('input').attributes('disabled')).not.undefined
})
