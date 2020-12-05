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
    biscuitFlag: 'https://cdn.pixabay.com/photo/2012/04/10/16/14/union-jack-26119__340.png',
    biscuitMessage: 'Long live the Queen!',
    biscuitTime: false,
  },
  methods: {
    chooseNote() {
      const randomNumber = Math.floor(Math.random() * this.notes.length);
      return this.notes[randomNumber];
    }
  },
  mounted() {
    const chance = Math.random();
    if (chance < 0.005) {
      this.biscuitTime = true;
    }  
  },
});