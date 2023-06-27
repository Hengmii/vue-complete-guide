const app = Vue.createApp({
	data() {
		return {
			userInput: '',
			visible: true,
			backgroundColor: ''
		}
	},
	computed: {
		userInput() {
			this.userInput = this.userInput.toLowerCase();
			if (this.userInput === 'user1') return 'user1'
			if (this.userInput === 'user2') return 'user2'
		},

		visible1() {
			return {
				user1: this.userInput === 'user1',
				user2: this.userInput === 'user2',
				visible: this.visible,
				hidden: !this.visible,
			}
		}
	}
	,
	methods: {
		toggle() {
			this.visible = !this.visible;
		}
	}
});
app.mount("#assignment")
