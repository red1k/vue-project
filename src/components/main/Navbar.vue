<template>
	<div>

		<v-toolbar color="blue" dense >
			<v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
			<v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="hidden-sm-and-down">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon class="hidden-sm-and-down">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon class="hidden-sm-and-down">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
		</v-toolbar>

		<v-navigation-drawer app v-model="drawer">
			<v-list dense nav>
				<v-list-item v-for="item in items" :key="item.title" router :to="item.route">
					<v-list-item-icon>
						<v-icon> {{ item.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

	</div>
</template>

<script>

export default{
	name: 'Navbar',

	components: {
	},

	data() {
		return {
			items: [
				{ title: 'Home', icon: 'home', route: '/' },
				{ title: 'Quiz', icon: 'quiz', route: '/quiz' },
				{ title: 'Test', icon: 'fact_check', route: '/test' },
			],
			right: null,
			drawer: true,
		}
	},
}

</script>

<style scoped>
.v-toolbar-title {
	font-size: 3rem,
}

</style>
