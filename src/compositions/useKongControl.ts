import { computed } from 'vue'

export const useKongControl = <
  I extends { control: any, handleChange: any },
>(
  input: I,
) => {
  const appliedOptions = computed(() =>
    Object.assign(
      {},
      input.control.value.config,
      input.control.value.uischema.options,
    ),
  )

  const onChange = (value: any) => {
    input.handleChange(input.control.value.path, value)
  }

  return {
    ...input,
    appliedOptions,
    onChange,
  }
}
