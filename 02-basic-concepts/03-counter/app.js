const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			confirmedName: ''
		}
	},
	methods: {
		confirmedInput() {
			this.confirmedName = this.name;
		},
		submitForm() {
			alert('Form submitted!');
		},

		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num
		},
		setName(LastName) {
			this.name = event.target.value + ' ' + LastName;
		}
	}
}).mount('#events');
