
const app = new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        ended:false
    }, 
    methods: {
        punch(sound) {
            if(sound) {
                var audio = new Audio(sound);
                audio.play();
                this.health -= 10;
                    if(this.health <= 0) {
                        this.ended = true;
                    }
              }
            
        },

        restart() {
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {
        
    },
});