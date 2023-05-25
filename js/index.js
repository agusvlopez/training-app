const app = new Vue ({
    el: '#contenedor',
    data: {
        loginModal: false,
        links: [
            {text: 'Home', url: '/', enable: true, active: true},
            {text: 'Entrenamientos', url: '/entrenamientos', enable: false, active: false},
            {text: 'Mi perfil', url: '/perfil', enable: false, active: false},
        ],
    },

    methods: {
    mostrarModalLogin () {
        this.loginModal = true;
    },

    cerrarModalLogin () {
        this.loginModal = false;
    },

    }
})