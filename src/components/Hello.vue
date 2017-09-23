<template>
  <div class="hello">
    <h1 v-if="seen">{{ msg }}</h1>
    <ul>
      <li v-for="todo in todos">
        {{todo.name}} / {{todo.sex}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      seen: true,
      todos: [
        { name: 'sean', sex: '남' },
        { name: 'gean2', sex: '여' },
        { name: 'Dean2', sex: '남' },
      ],
    };
  },
};
</script>
