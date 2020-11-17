<template>
	<div>
		<form @submit.prevent="submitData">
			<div>
				<label>Name</label>
				<input type="text" v-model="enteredName">
			</div>
			<div>
				<label>Phone</label>
				<input type="text" v-model="enteredPhone">
			</div>
			<div>
				<label>Email</label>
				<input type="text" v-model="enteredEmail">
			</div>
			<button>Add</button>
		</form>	
	</div>
</template>

<script>
  export default {
		emits: ['add-contact'],
		components: {
		},
		props: {
			name: String,
			phoneNumber: Number,
			emailAddress: String,
		},
		data() {
			return {
				enteredName: '',
				enteredPhone: '',
				enteredEmail: '',
			}
		},
		methods: {
			submitData() {
				this.$emit(
					'add-contact',
					this.enteredName,
					this.enteredPhone,
					this.enteredEmail
				)
			},
		}
	}
</script>

<style scoped>
input {
	border-style: solid;
}
button {
	color: red;
}
</style>
