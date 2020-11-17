<template>
  <ul>
    <li>{{ name }}</li>
    <li>{{ phone }}</li>
    <li>{{ email }}</li>
  </ul>
</template>


<script>
export default {
  props: {
    name: String,
    phone: String,
    email: String,
  }
}
</script>

<style scoped>
</style>