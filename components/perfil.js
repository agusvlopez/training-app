Vue.component('perfil', {
    data:function(){
        return {

            ejerciciosGuardados: [],

        }
      },
    template: 
   ` <div class="p-2">
        <h1>Mi perfil</h1>
        <p class="text-light">Acá se encuentran tus ejercicios guardados</p>
        <div v-for="ejercicio in ejerciciosGuardados" class="container p-4">
        <div>
            <div class="m-2">
                <div class="card rounded-0" style="max-width: 18rem;">
                    <img :src="ejercicio.img" class="card-img-top" :alt="title">
               <div class="card-body">
   
                <h2 class="card-title">{{ejercicio.title}}</h2>
                <p class="card-text">{{ejercicio.description}}</p>
                
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    `,
    props: ['title','img' ,'description'],

    created(){
        let data = localStorage.getItem('eGuardados')
        if(data !== null) {
            this.ejerciciosGuardados = JSON.parse(data);
          }
          console.log(data) 
    },

    methods: {


    }
})