<template>
	<div>
		<p>Choice component</p>
		<v-radio-group v-model="radioGroup">
			<v-radio
				v-for="n in 3"
				:key="n"
				:label="`Radio ${n}`"
				:value="n"
			></v-radio>
		</v-radio-group>
	</div>
</template>

<script>
	export default {
		name: 'Choice',
		data () {
			return {
				radioGroup: 1,
			}
		}
	}
</script>

<style scoped>
</style>
