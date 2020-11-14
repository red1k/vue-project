<template>
	<v-card flat tile class="mt-4">
    <v-window v-model="onboarding" reverse >
      <v-window-item v-for="(question, index) in quiz.slice(a, b)" :key="index">
        <v-card color="grey" height="300">
          <v-row class="fill-height" align="center" justify="center" >
            <h2 class="white--text">
              {{ question.question }}
            </h2>
          </v-row>
        </v-card>
        <v-card color="blue" height="150" class="mt-4">
          <v-row class="fill-height" align="center" justify="center" >
            <ul>
              <li v-for="(answer, index) in question.answer" :key="index">
                <input type="radio" :id="index" :value="answer.props" v-model="pickedResponse">
                <label>{{ answer.props }}</label>
              </li>
            </ul>
          </v-row>
        </v-card>
        <h3>{{pickedResponse}}</h3>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-space-between">
      <v-btn text @click="previous()" >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn text @click="allQuestion()" >
        <v-icon>bookmark</v-icon>
      </v-btn>
      <v-btn text @click="next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
	export default {
		name: 'Question',
		data() {
			return {
        shit: null,
        pickedResponse: [],
				length: 5,
				onboarding: 0,
        radioGroup: 1,
        a: 0,
        b: 1,
        quiz: [
          {
            question: 'question 1',
            answer: [
              {props: 'answer 1', correct: true},
              {props: 'answer 2'},
              {props: 'answer 3'},
            ],
          },
          {
            question: 'question 2',
            answer: [
              {props: 'answer 21'},
              {props: 'answer 22'},
              {props: 'answer 23'},
            ],
          },
          {
            question: 'question 3',
            answer: [
              {props: 'answer 31'},
              {props: 'answer 32'},
              {props: 'answer 33'},
            ]
          }
        ],
      } 
    },

    methods: {
      allQuestion () {
        this.quiz.forEach(function(item) {
          console.log(item.question)
        })
      },
      next () {
        if (this.quiz.length <= this.b) {
          return;
        }
        this.a++;
        this.b++;
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      previous () {
        if (this.b == 1) {
          return;
        }
        this.a--;
        this.b--;
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
		
	}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
