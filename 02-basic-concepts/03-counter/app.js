const app = Vue.createApp({
	data() {
		return {
			counter: 10,
			name: '',
			confirmedName: '',
			lastName: '',
			// fullname: ''
		}
	},
	watch: {
		counter(value) {
			if (value > 50)	{
				// const that = this;
				setTimeout(() => {
					this.counter = 0;
				}, 2000);
			}
		}
	// 	name(value) {
	// 		if (value ==='') {
	// 			this.fullname = '';
	// 		} else {
	// 			this.fullname = value + ' ' + this.lastName;
	// 		}
	// 	}
	// },
	// 	lastName(value) {
	// 		if (value ==='') {
	// 			this.fullname = '';
	// 		} else {
	// 			this.fullname = this.name + ' ' + value;
	// 		}
		},
	computed: {
		fullname() {
			if (this.name === '' || this.lastName === '') {
				return '';
			}
			return this.name + ' ' + this.lastName;
		}
	},
	methods: {
		outputFullName() {
			if (this.name === '') {
				return '';
			}
			return this.name + ' ' + 'Jiang'
		},
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
			this.name = event.target.value;
		},
		resetInput() {
			this.name = '';
		}
	}
}).mount('#events');
