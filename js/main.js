const { createApp } = Vue

createApp({
  data() {
    return {
      messageEmail: 'Email list!',
      messageName: 'Name list!',
      userNumber: '',
      randomEmail: '',
      randomName: '',
      newObject: {},
      generatedAccountList: [],
      emailLink: 'https://flynn.boolean.careers/exercises/api/random/mail',
      nameLink: 'https://flynn.boolean.careers/exercises/api/random/name'
    }
  },
  methods: {
    getAccount() {
      axios.get(this.nameLink).then((elemento) => {
        (this.randomName = elemento.data.response);
        this.newObject = { nome: this.randomName }
      });
      axios.get(this.emailLink).then((elemento) => {
        (this.randomEmail = elemento.data.response);
        this.newObject = { nome: this.randomName, email: this.randomEmail }
        this.generatedAccountList.push(this.newObject)
      });
    },
    generateAccount(number) {
      for (let index = 0; index < number; index++) {
        this.getAccount();
      };
      this.generatedAccountList = [];
    }
  },
  mounted() {

  }

}).mount('#app')