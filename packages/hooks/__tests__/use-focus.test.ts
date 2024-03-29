import { ref } from 'vue'
import { describe, expect, it } from 'vitest'
import { useFocus } from '../use-focus'

describe('useFocus', () => {
  it('should focus el', async () => {
    const inputK = document.createElement('input')
    document.body.appendChild(inputK)

    const reference = ref(inputK)
    const { focus } = useFocus(reference)

    focus()

    expect(document.activeElement).toBe(inputK)
  })
})
