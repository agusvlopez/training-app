const home = {
    template: ` 
    <home></home>
    `
}

const entrenamientos = {
    template: 
    `<div>
        <h1>Entrenamientos</h1>
        <entrenamientos></entrenamientos>
    </div>
    `
 
}

const perfil = {
    template: `
   <perfil></perfil>
`
}



const router = new VueRouter({
    routes: [
        {path: '/', component: home},
        {path: '/entrenamientos', component: entrenamientos},
        {path: '/perfil', component: perfil}
    ]
});

console.log(router.options.routes[1])

const app = new Vue ({
    el: '#contenedor',
    router,
    data: {
        modalLogin: false,
        login: false,
        links: [
            {text: 'Home', url: '/', enable: true, active: true, id: 1},
            {text: 'Entrenamientos', url: '/entrenamientos', enable: false, active: false, id: 2},
            {text: 'Mi perfil', url: '/perfil', enable: false, active: false, id: 3},
        ]
        
    },

    mounted(){
        const isLogin = JSON.parse(localStorage.getItem('login'));
        if(isLogin) {
          this.login = true;
        }
    },

    methods: {

    mostrarModalLogin () {
        this.modalLogin = true;
    },

    cerrarModalLogin () {
        this.modalLogin = false;
    },

    iniciarSesion() {
        this.login = true;
        localStorage.setItem('login','true');
        this.cerrarModalLogin();
    },
    
    toogleLogin() {
            if(!this.login){ // si no esta logueado
                  
                this.mostrarModalLogin();
                   
            }else {   // si esta logueado... cierro sesion
                localStorage.setItem('login','false');
                this.login = false;
            }          
        },
    },

    filterEntrenamientos() {
     if(this.links.url == '/entrenamientos'){
        this.entrenamiento = true;
     }
     
    },
    
    

})
