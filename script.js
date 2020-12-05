const app = new Vue({
  el: '#app',
  data: {
    notes: [
      'You got this!',
      'Dont worry about it you can do it',
      'This will soon pass...just like your grades on your finals',
      'you are capable of many things',
      '😋',
      ],
  },
  methods: {
    chooseNote() {
      const randomNumber = Math.floor(Math.random() * this.notes.length);
      return this.notes[randomNumber];
    }
  }, 
});