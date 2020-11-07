<template>
	<v-app>
		<v-main>

			<v-container>
				<Navbar/>
				<router-view/>
			</v-container>

			<v-footer>
			</v-footer>


		</v-main>
	</v-app>
</template>

<script>
import Navbar from '@/components/main/Navbar.vue'

export default {
	name: 'App',

	components: {
		Navbar
	},

	data () {
		return {
		}
	},
};
</script>
