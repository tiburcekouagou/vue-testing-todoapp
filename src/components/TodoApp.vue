<template>
    <div>

    </div>
</template>

<script setup lang="ts">
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const todos: Todo[] = [
    {
        id: 1,
        text: 'Learn Vue.js 3',
        completed: true
    }
];

console.log(todos)
</script>

<style></style>