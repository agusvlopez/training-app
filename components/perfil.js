Vue.component('perfil', {
    data:function(){
        return {

            ejerciciosGuardados: [],

        }
      },
    template:
   ` <div class="p-2">
        <h1>Mi perfil</h1>
        <p class="text-light ps-3 p-2">Acá se encuentran tus ejercicios guardados</p>
        <div v-for="ejercicio in ejerciciosGuardados" class="container p-4">
        <div>
            <div class="m-2">
                <div class="card rounded-0" style="max-width: 18rem;">
                    <img :src="ejercicio.img" class="card-img-top" :alt="title">
               <div class="card-body">

                <h2 class="card-title">{{ejercicio.title}}</h2>
                <p class="card-text">{{ejercicio.description}}</p>
                <button
                @click="borrarEjercicio"
                :id="ejercicio.id"
                class="btn btn-dark btn-outline-dark rounded-0 text-light">Borrar ejercicio
                </button>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    `,
    props: ['title','img','id','description'],

    created(){
        let data = localStorage.getItem('eGuardados')
        if(data !== null) {
            this.ejerciciosGuardados = JSON.parse(data);
          }
          console.log(data)
    },

    methods: {

        borrarEjercicio: function (event) {
            if(event.target.id == 1){
                let indice1 = this.ejerciciosGuardados.findIndex(function(element){
                    return element.id == 1
                })
                this.ejerciciosGuardados.splice(indice1,1);
                console.log(indice1)
            }
            else if(event.target.id == 2){
                let indice2 = this.ejerciciosGuardados.findIndex(function(element){
                    return element.id == 2
                })
                console.log(indice2)
                this.ejerciciosGuardados.splice(indice2,1);

            }
            else if(event.target.id == 3){
                let indice3 = this.ejerciciosGuardados.findIndex(function(element){
                    return element.id == 3
                })
                console.log(indice3)
                this.ejerciciosGuardados.splice(indice3,1);

            }


            // this.ejerciciosGuardados.splice(1);
            // console.log(event.target.id)

        // else if(event.target.id == 2){
        //     let objetoFuerza2 = {...this.ejerciciosGuardados};
        //     this.ejerciciosGuardados.splice(objetoFuerza2,1);
        //     console.log(objetoFuerza2)
        // }else if(event.target.id == 3){
        //     let objetoMeditacion3 = {...this.ejerciciosGuardados};
        //     this.ejerciciosGuardados.splice(objetoMeditacion3,1)
        //     console.log(objetoMeditacion3)
        // }


        // localStorage.removeItem('eGuardados');
        }

    }
})