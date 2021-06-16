<template>
  <h1>Posts</h1>
  <ul>
    <li v-for="post in posts" :key="post.id">{{ post.text }}</li>
  </ul>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const posts = ref([])

    onMounted(async () => {
      const resp = await fetch('/posts')
      posts.value = await resp.json()
    })

    return { posts }
  }
}

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
