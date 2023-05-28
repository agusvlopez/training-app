const home = {
    template: ` 
    <home></home>
    `
}

const entrenamientos = {
    template: 
    `<entrenamientos>
        <h1>Entrenamientos</h1>
    </entrenamientos>
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
        ],
        
        // articles: [
        //         {
        //             id: 1,
        //             img: '../img/hiit.jpg',
        //             title: 'Hiit tren superior',
        //             description: 'Brazos fuertes y definidos sin pesas: cinco rondas intensas de ejercicio para el tren superior y el core. Calentamiento incluido',
        //             saved: false,
        //             enable: false
        //         },  
        //         {
        //             id: 2,
        //             img: '../img/brazos.jpg',
        //             title: 'Fuerza y cardio',
        //             description: 'Combina ejercicios de fuerza y cardio para aumentar la energía y fortalecer los músculos. La seseión esta organizada para hacerla con mancuernas o botellas de agua, pero también podés hacerla sin peso adicional',
        //             saved: false,
        //             enable: false
        //         },  
        //         {
        //             id: 3,
        //             img: '../img/meditacion.jpg',
        //             title: 'Rutina de meditación',
        //             description: 'Conectate con la naturaleza y con tu interior. Solo necesitas encontrar un lugar cómodo y en silencio para sentarte y dejarte llevar. La sesión tiene ejercicios de respiración y ningun ejercicio de movimiento.',
        //             saved: false,
        //             enable: false
        //         }
        // ],
 
        
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
        this.cerrarModalLogin();
    },
    
    toogleLogin() {
            if(!this.login){ // si no esta logueado
                  
                this.mostrarModalLogin();
                   
            }else {   // si esta logueado... cierro sesion
                   
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
