import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoApp from '../TodoApp.vue'

test('creates a todo', () => {
  const wrapper = mount(TodoApp)

  const todo = wrapper.get('[data-test="todo"]')
  expect(todo.text()).toBe('Learn Vue.js 3')
})

test('creates a todo', () => {
  const wrapper = mount(TodoApp)
  expect(wrapper.findAll('[data-test]="todo"')).toHaveLength(1)

  wrapper.get('[data-test="new-todo"]').setValue('New todo')
  wrapper.get('[data-test="form"]').trigger('submit')

  expect(wrapper.findAll('[data-test]="todo"')).toHaveLength(2)
})
