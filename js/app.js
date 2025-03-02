const app = Vue.createApp({
    data() {
        return{
            //message: 'hello view',
           // menu_abierto: false,
            datos: {}

        }
    },
    methods: {
        toggleMenu() {
            this.menu_abierto = !this.menu_abierto
        }
    },
    mounted() {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.datos = data;

            })
            .catch(error => {
                console.error('error loading data.json:', error);
            });
        
    },
})

app.mount('#app')