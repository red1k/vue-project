<template>
	<div>
		<h1>Home</h1>
		<a :href="otLink" target="_blank">Go to OT page</a>
    <section id="events">
      <button @click="add(10)">Add 10</button>
      <button @click="reduce(5)">Subtract 5</button>
      <p>Result: {{ counter }}</p>
			<input type="text" v-model="name">
			<input type="text" v-model="lastName">
      <p>Your Name: {{ name }}</p>
      <p>Your Last Name: {{ lastName }}</p>
      <p>Your Full Name: {{ fullName }}</p>
			<button @click="remove">Clear</button>
    </section>
	</div>
</template>
<script>
  export default {
    name: 'Home',

		components: {

		},

		data: () => ({
			otLink: 'https://www.ot.mn/',
			counter: 0,
			name: '',
			lastName: '',
		}),

		computed: {
			fullName() {
				console.log('shit')
				return this.name + ' ' + this.lastName;
			},
		},

		methods: {
			remove() {
				this.name = '';
			},
			setName(event) {
				this.name = event.target.value;
			},
			add(num) {
				this.counter = this.counter + num;
			},
			reduce(num) {
				this.counter = this.counter - num;
			},
		}
	}
</script>

<style scoped>
input {
	border-style: solid;
}
</style>
