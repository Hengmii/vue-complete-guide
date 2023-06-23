const app = Vue.createApp({
	data() {
		return {
			choiceAlert: 'Button is clicked!',
			output1: '',
			output2: ''
		}
	},
	methods: {
		clickButton() {
			alert(this.choiceAlert);
		},
		inputText(event) {
			this.output1 = event.target.value;
		},
		inputText2(event) {
			this.output2 = event.target.value;
		}
	}
}).mount('#assignment');
