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
    clicks: 0,
    background: 'lightblue',
  },
  methods: {
    chooseNote() {
      const randomNumber = Math.floor(Math.random() * this.notes.length);
      return this.notes[randomNumber];
    }
  },
  mounted() {
    const chance = Math.random();
    if (chance < 0.505) {
      this.biscuitTime = true;
    }  
  },
  computed: {
    backdrop() {
      if (this.biscuitTime) {
        return {
          'background-color': this.background,
          'background-image': 'url(https://cdn.pixabay.com/photo/2012/04/10/16/14/union-jack-26119__340.png)',
          'background-repeat': 'space',
          'background-size': '150px',
        };
      } else {
        return {
          'background-color': this.background,
        };
      }
    },
    clickCount() {
      if (this.clicks < 5) {
        return '';
      }
      if (this.clicks == 69 || this.clicks == 420) {
        return 'nice';
      }
      if (this.clicks > 123) {
        return `send us a photo on insta 😉 @lowellarkclub | ${this.clicks}`;
      }
      if (this.clicks > 105) {
        return 'ye dats it 🎉';
      }
      if (this.clicks > 100) {
        return '> 100';
      }
      return this.clicks;
    },
  },
  watch: {
    clicks(val) {
      if (val >= 100) {
        this.background = 'dimgray';
      } else if (val >= 69) {
        this.background = 'darkolivegreen';
      } else if (val >= 53) {
        this.background = 'cornflowerblue';
      } else if (val >= 25) {
        this.background = 'pink';
      }
    },
  },
});