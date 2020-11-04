<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Profile />
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from '@/components/Profile.vue'

export default {
  name: 'Home',
  components: {
	Profile
  }
}
</script>
