import type { Meta, StoryObj } from '@storybook/vue3'

import StorybookJsonform from '../StorybookJsonform.vue'

const meta: Meta<typeof StorybookJsonform> = {
  title: 'Control/Text',
  component: StorybookJsonform,
  parameters: {
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
  },
}

export default meta
type Story = StoryObj<typeof StorybookJsonform>

export const SingleLine: Story = {
  tags: ['autodocs'],
  args: {
    uischema: {
      type: 'Control',
      scope: '#/properties/name',
      options: {
        placeholder: 'Please input a unique name.',
      },
    },
    schema: {
      type: 'object',
      properties: { name: { type: 'string' } },
    },
    data: {},
  },
}

export const MultiLine: Story = {
  args: {
    uischema: {
      type: 'Control',
      scope: '#/properties/name',
      options: {
        placeholder: 'Please input a unique name.',
        multi: true,
      },
    },
    schema: {
      type: 'object',
      properties: { name: { type: 'string' } },
    },
    data: {},
  },
}

export const Password: Story = {
  args: {
    uischema: {
      type: 'Control',
      scope: '#/properties/password',
      options: {
        placeholder: 'Please input a password.',
      },
    },
    schema: {
      type: 'object',
      properties: { password: { type: 'string', format: 'password' } },
    },
    data: {},
  },
}

export const LabelTooltip: Story = {
  args: {
    uischema: {
      type: 'Control',
      scope: '#/properties/name',
      options: {
        placeholder: 'Please input a unique name.',
      },
    },
    schema: {
      type: 'object',
      properties: { name: { type: 'string', description: 'Name field' } },
    },
    data: {},
  },
}

// export const CheckBox: Story = {
//   args: {
//     uischema: {
//       type: 'Control',
//       scope: '#/properties/cache',
//     },
//     schema: {
//       type: 'object',
//       properties: {
//         cache: {
//           type: 'boolean',
//           description: 'A simple boolean input',
//         },
//       },
//       required: ['cache'],
//     },
//     data: {},
//   },
// }

// export const Toggle: Story = {
//   args: {
//     uischema: {
//       type: 'Control',
//       scope: '#/properties/cache',
//       options: {
//         toggle: true,
//       },
//     },
//     schema: {
//       type: 'object',
//       properties: {
//         cache: {
//           type: 'boolean',
//           description: 'A simple boolean input',
//         },
//       },
//       required: ['cache'],
//     },
//     data: {
//       cache: true,
//     },
//   },
// }

// export const Text: Story = {
//   args: {
//     uischema: {
//       type: 'Control',
//       scope: '#/properties/name',
//       options: {
//         placeholder: 'Please input a unique name.',
//       },
//     },
//     schema: {
//       type: 'object',
//       properties: {
//         name: {
//           type: 'string',
//           description: 'A simple string input',
//           maxLength: 20,
//         },
//       },
//       required: ['name'],
//     },
//     data: {},
//   },
// }

// export const TextArea: Story = {
//   args: {
//     uischema: {
//       type: 'Control',
//       scope: '#/properties/description',
//       options: {
//         multi: true,
//         placeholder: 'Please input a description.',
//       },
//     },
//     schema: {
//       type: 'object',
//       properties: {
//         description: {
//           type: 'string',
//           description: 'A simple text area input',
//           maxLength: 200,
//         },
//       },
//     },
//     data: {},
//   },
// }

// export const Number: Story = {
//   args: {
//     uischema: {
//       type: 'Control',
//       scope: '#/properties/age',
//     },
//     schema: {
//       type: 'object',
//       properties: {
//         age: {
//           type: 'integer',
//           description: 'A simple number input',
//         },
//       },
//       required: ['age'],
//     },
//     data: {},
//   },
// }


// export const Password: Story = {
//   args: {
//     uischema: {
//       type: 'Control',
//       scope: '#/properties/password',
//       options: {
//         placeholder: 'Please input a password.',
//       },
//     },
//     schema: {
//       type: 'object',
//       properties: {
//         password: {
//           type: 'string',
//           description: 'A simple password input',
//           format: 'password',
//         },
//       },
//       required: ['password'],
//     },
//     data: {},
//   },
// }
