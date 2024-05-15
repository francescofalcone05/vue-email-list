const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Email list!',
      userNumber: '',
      randomEmail: '',
      generatedList: [],
      emailLink: 'https://flynn.boolean.careers/exercises/api/random/mail'
    }
  },
  methods: {
    getEmail() {
      axios.get(this.emailLink).then((elemento) => {
        (this.randomEmail = elemento.data.response);
        this.generatedList.push(this.randomEmail);

      })
    },
    generateEmail(number) {
  for (let index = 0; index < number; index++) {
    this.getEmail();
    this.generatedList = [];
  };
}
  },
mounted(){

}

}).mount('#app')