const app = Vue.createApp({
	data() {
		return {
			usrInput: '',
			tasks: [],
			listVisibility: true
		}

	},
	computed: {
		buttonCaption() {
			return this.listVisibility ? 'Hide' : 'Show'
		}
	},
	methods: {
		addTask() {
			if (this.usrInput.length > 0) this.tasks.push(this.usrInput);
			this.usrInput='';
		},
		handleShowButton() {
			this.listVisibility = !this.listVisibility;
		}
	}
	})
app.mount('#assignment')
