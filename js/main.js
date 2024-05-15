const { createApp } = Vue

createApp({
  data() {
    return {
      messageEmail: 'Email list!',
      messageName: 'Name list!',
      userNumber: '',
      randomEmail: '',
      randomName: '',
      generatedEmailList: [],
      generatedNameList: [],
      emailLink: 'https://flynn.boolean.careers/exercises/api/random/mail',
      nameLink: 'https://flynn.boolean.careers/exercises/api/random/name'
    }
  },
  methods: {
    getEmail() {
      axios.get(this.emailLink).then((elemento) => {
        (this.randomEmail = elemento.data.response);
        this.generatedEmailList.push(this.randomEmail);

      })
    },
    getName() {
      axios.get(this.nameLink).then((elemento) => {
        (this.randomName = elemento.data.response);
        this.generatedNameList.push(this.randomName);

      })
    },
    generateAccount(number) {
  for (let index = 0; index < number; index++) {
    this.getEmail();
    this.getName();
    this.generatedEmailList = [];
    this.generatedNameList = [];

  };
}
  },
mounted(){

}

}).mount('#app')