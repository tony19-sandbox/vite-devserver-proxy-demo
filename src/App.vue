<template>
  <ul>
    <li v-for="post in posts" :key="post.id">{{ post.text }}</li>
  </ul>
</template>

<script setup>
const resp = await fetch('/posts')
const posts = await resp.json()
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
