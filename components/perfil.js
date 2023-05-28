Vue.component('perfil', {
    template: 
   ` <div>
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
                <button
                @click="abrirModal"
                class="btn btn-dark btn-outline-dark rounded-0 text-light">Guardar ejercicio</button>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    `,
    props: ['ejerciciosGuardados']
})