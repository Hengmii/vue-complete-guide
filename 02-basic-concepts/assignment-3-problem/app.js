const app = Vue.createApp({
	data() {
		return {
			counter: 0,
		}
	},
	watch: {
		counter(value) {
			const that = this;
			setTimeout(() => {
				that.counter = 0;
			},5000)

		}
	},
	computed: {
		result() {
			if (this.counter < 37) {
				return "Not there yet!";
			} else if (this.counter > 37) {
				return "Too much!";
			} else {
				return this.counter;
			}
		}
	},
	methods: {
		add(num) {
			this.counter += num;
			}
		}
}).mount('#assignment')
