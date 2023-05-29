 Vue.component('entrenamientos',{
    data:function(){
        return {
          ejerciciosGuardados: [],
          modal: false,
          articles: [
            {
                id: 1,
                img: '../img/hiit.jpg',
                title: 'Hiit tren superior',
                description: 'Brazos fuertes y definidos sin pesas: cinco rondas intensas de ejercicio para el tren superior y el core. Calentamiento incluido',
                saved: false,
                enable: false
            },  
            {
                id: 2,
                img: '../img/brazos.jpg',
                title: 'Fuerza y cardio',
                description: 'Combina ejercicios de fuerza y cardio para aumentar la energía y fortalecer los músculos. La seseión esta organizada para hacerla con mancuernas o botellas de agua, pero también podés hacerla sin peso adicional',
                saved: false,
                enable: false
            },  
            {
                id: 3,
                img: '../img/meditacion.jpg',
                title: 'Rutina de meditación',
                description: 'Conectate con la naturaleza y con tu interior. Solo necesitas encontrar un lugar cómodo y en silencio para sentarte y dejarte llevar. La sesión tiene ejercicios de respiración y ningun ejercicio de movimiento.',
                saved: false,
                enable: false
            }
    ],
          
        }
      },

    template: ` 
<section>
<div v-show="modal" class="modal text-white" tabindex="-1" style="display: block;">
<div class="modal-dialog">
  <div class="modal-content bg-dark">
    <div class="modal-header">
      <p class="modal-title text-uppercase">Iniciar sesión</p>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" @click="cerrarModal"></button>
    </div>

    <form @submit.prevent="agregarEjercicio">

     <div class="modal-body pb-0">
        <p>¿Seguro/a que queres guardar el ejercicio?</p>
    </div>  

    <div class="modal-footer">
        <input type="submit" value="Guardar" class="btn btn-light">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="cerrarModal">Cancelar</button>
    </div>
    </form>

  </div>
</div>
</div>

     <div class="container p-4">
     <div v-for="article in articles">
         <div class="m-2">
             <div class="card rounded-0" style="max-width: 18rem;">
                 <img :src="article.img" class="card-img-top" :alt="article.title">
            <div class="card-body">
             <h2 class="card-title">{{article.title}}</h2>
             <p class="card-text">{{article.description}}</p>
             <button
             @click="abrirModal"
             :id="article.id"
             class="btn btn-dark btn-outline-dark rounded-0 text-light">Guardar ejercicio</button>
         </div>
         </div>
         </div>
     </div>
     </div>

     
</section>`,


    
     methods: {
     agregarEjercicio: function() {

        localStorage.setItem('eGuardados', JSON.stringify(this.ejerciciosGuardados));
        this.modal = false; 
    },

    abrirModal: function(event) {
        this.modal = true;
        
        if(event.target.id == 1){
            const objetoHiit = {...this.articles[0]};
            this.ejerciciosGuardados.push(objetoHiit);
            console.log(objetoHiit)
        }else if(event.target.id == 2){
            const objetoFuerza = {...this.articles[1]};
            this.ejerciciosGuardados.push(objetoFuerza)
            console.log(objetoFuerza)
        }else if(event.target.id == 3){
            const objetoMeditacion = {...this.articles[2]};
            this.ejerciciosGuardados.push(objetoMeditacion)
            console.log(objetoMeditacion)
        }
        console.log(this.ejerciciosGuardados)
    },

    cerrarModal: function(){
        this.modal = false;
    }
    },

   

})
