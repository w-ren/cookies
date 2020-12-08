const app = new Vue({
  el: '#app',
  data: {
    notes: [
      'You got this!',
      'Dont worry about it you can do it',
      'This will soon pass...just like your grades on your finals',
      'you are capable of many things',
      '😋',
      'You are a tough cookie! 🍪',
      'Hope your year has been sweet! ',
      'You got this!',
      'Good luck🍀',
      'I believe in you👍',
      'sending a you virtual hug❤',
      'I am proud of you. 🥰',
      '☺Remember to take a break when you need too! ',
      'youve got this',
      'you are almost done keep going🥳',
      'winter break is just around the corner❄ ',
      'Youre doing great!😎',
      'Dont forget to relax a little ☀',
      'You will do great!',
      '❄Winter break is coming!❄',
      'Stay safe!',
      'you can do it :D👍',
      '✨ace that test!✨',
      'you did great this semester!',
      'youre still a 10 in your pjs! 🛏',
      '😘even on your lazy days you look great!',
      'youll do great!',
      'keep up the hard work!📚',
      'youre awesome :)',
      'we almost done :)',
      'u got this!!',
      'you can do it! winter break is almost here :)',
      'youre doing so well <3',
      'good luck!!',
      '🍔🍕🍊🍰after finals you can sleep in and eat so keep going',
      'just keep pushing!',
      'remember to relax and take a break😴',
      'It will be okay!',
      'Have a good break!',
      'Ur amazing! 😏',
      '😘Take time for yourself!',
      'good luck🥇 ',
      'you are doing great',
      'You got this!!',
      '🌳 👃We r rooting for you!!',
      'We believe in you!!',
      'Good luck with finals! ',
      'Give yourself a pat on the back for completing this semester!!!!',
      'Youre amazing!!',
      'Dont give up you got this!!',
      'Youre doing an amazing job!!',
      'You got this!!',
      'have a good one!',
      'you are awesome ',
      'dont give up!',
      'youre doing great!',
      'you got this!',
      'You are doing great! I believe in you!',
      'i believe in you!',
      'good luck on your finals!',
      'Take care of yourself!',
      'You will do great',
      'Hope you are doing well',
      'U go!',
      'You will make it through ',
      'The end will be positive!',
      'You are loved and appreciated<3',
      'Keep going youre doing great:))',
      'Christmas break is almost here!🎅🎄',
      'Finals will be over soon!',
      'You worked hard and you can do this!',
      'You are important to many people! ',
      'We are here for you!',
      'this too shall pass',
      'one grade doesnt define you ',
      'youre doing amazing <3',
      'have a great day ><',
      'you look lovely today ;);)',
      'think of all the holiday food you can eat when youre done!',
      'study hard and stay hydrated <3',
      'when in doubt the answer is C! ',
      'You will definitely do well :)',
      'Take a deep breath and put your fighting gear on!',
      'Believe in yourself.',
      'dun give yet, ur almost done!',
      'look forward to sleepin in yeehaww :3',
      'i dare you to smile at this note ^-^',
      'stay strong! you got this!',
      'remember your motivation, are you doing this for yourself or someone else?',
      'push through, be confident!',
      'youre so close to the end of the semester! keep going!!!',
      'remember that everything will be okay at the end!',
      'dont give up!!!',
      'woooo yay it’s almost at winter break u can do it wooo',
      'youre so close :))',
      'good luck in your next class',
      'i believe in you',
      'you can!',
      'you are special!',
      'fighting!',
      'ure a tough cookie, u got this!',
      'good luck <3',
      'you are so close to the end of the semester!',
      'treat yourself to a real-life cookie :)',
      'remember to take time for yourself <3',
      'youre doing great :D',
      'dont stress too much!!',
      'dont give up!',
      'youre awesome ;)',
      'dont worry everything happens for a reason!!',
      'proud of you!!',
      'its okay to feel unmotivated!!',
      'winter break is almost here! you got this',
      '<3 <3 release the stress <3 <3',
      'thank you for trying your hardest and doing your best ',
      ':) dont forget to take care of yourself ',
      'stay hydrate!!! ',
      'have a great day!!',
      'hope you are doing ok!',
      'you got this. keep it up!',
      'have a good day! :)',
      'ur cute uwu',
      'Do not give up!',
      'Finals week will be over soon!',
      'You are smart',
      'You can do it!',
      'you got it I believe in you!',
      'a mistake is success in progress!',
      'keep going and dont give up!',
      'you dont gain anything by stressing so dont stress ',
      'your studying will pay off',
      'good luck sweetieee',
      'woooo you can do itttt!',
      'you got this!',
      'dont give up!',
      'youre doing great!',
      'you are worth it :)',
      'we believe in you ',
      'Gobble Gobble goose you are a moose.',
      '<3 you can do this',
      'Do not let grades define you',
      'High school is tough but you are tougher',
      'Smile :)',
      'Turn that frown upside down',
      'You can do this!',
      'Keep calm and destroy finals',
      'Finish the semester strong!!',
      'Grab a coffee and pass those finals!',
      'Dont worry weve been thru this b4',
      'Be happy everything else no biggie',
      'We LU food we LU you',
      'you got this',
      'i believe in you',
      'believe and achieve',
      'manifest',
      'get enough rest',
      'dont procrastinate',
      'ask tommy, hilfiger it out',
      'dont cry, youre computer will get wet',
      'dont be sad, be swag',
      'without you, we wouldnt have you <3',
      'wake up and choose happy',
      'when life gets hard, make it easy',
      'dont lose your confidence like how kim k lost her earrings',
      'at the end of the day, its night, go get some rest',
      'Cheers from the south',
      'Can\'t mess up as much as you think you can',
      'dont worry everything happens for a reason!!',
      'proud of you!!',
      'its okay to feel unmotivated!!',
      'you will do great!, have a nice day!, reward yourself!',
      '<3 you can do this',
      'Do not let grades define you',
      'High school is tough but you are tougher',
      'Smile :)',
      'Turn that frown upside down',
      'You can do this!',
      'Keep calm and destroy finals',
      'Finish the semester strong!!',
      'Grab a coffee and pass those finals!',
      'Remember to take breaks',
      'Better to sleep than study',
      'Eating is productive dont forget',
      'One test wont ruin your entire life it will be okay',
      'Christmas in on the horizon!!',
      'No matter how hard today was its almost over',
      'Prioritize your mental health first ',
      'Its ok to feel overwhelmed its ok to cry it out',
      'Even though you arent the best at this you are still so amazing at so many other things',
      'Its so necessary to give yourself time to relax',
      'Trust the process of your progress',
      'Your mishaps slip ups setbacks and failures do not define you',
      'You dont have to good at everything you try',
      'Sometimes life suck. We dont know why or how but it wont last forever ',
      'Every failure will help you thrive one day ',
      'go for it!',
      'we believe in you!',
      'have an amazing day!',
      'It\'s almost over you are doing great',
      'Work to your best ability as it will benefit greatly',
    ],
    biscuitFlag: 'https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_1280.jpg',
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
    if (chance < 0.005) {
      this.biscuitTime = true;
    }  
  },
  computed: {
    backdrop() {
      if (this.biscuitTime) {
        return {
          'background-color': this.background,
          'background-image': 'url(https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_1280.jpg)',
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
      if (this.clicks > 109) {
        return `uuhh...why are you still clicking?? | ${this.clicks}`;
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