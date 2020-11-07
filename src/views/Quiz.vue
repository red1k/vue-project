<template>
  <div class="about">
    <Question />
    <Choice />
  </div>
</template>

<script>
import Choice from '@/components/quiz/Choice.vue'
import Question from '@/components/quiz/Question.vue'


export default {
  name: 'Quiz',
  components: {
		Choice,
		Question
  }
}
</script>
