const app = new Vue ({
    el: '#contenedor',
    data: {
        login: false,
        links: [
            {text: 'Home', url: '/', enable: true, active: true},
            {text: 'Entrenamientos', url: '/entrenamientos', enable: false, active: false},
            {text: 'Mi perfil', url: '/perfil', enable: false, active: false},
        ],
    },

    methods: {
    mostrarModalLogin () {
        this.login = true;
    },

    cerrarModalLogin () {
        this.login = false;
    },

    toogleLogin() {
        if(!this.login){ // si no esta logueado
          
            this.mostrarModalLogin();
           
        }else {   // si esta logueado... cierro sesion
           
            this.login = false;
        }
              
    },
    }
})