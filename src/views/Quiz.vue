<template>
  <div class="about">
    <p class="pt-4">Medleg shalgah test</p>
    <Question />
  </div>
</template>

<script>
import Question from '@/components/quiz/Question.vue'


export default {
  name: 'Quiz',
  components: {
		Question
  }
}
</script>
