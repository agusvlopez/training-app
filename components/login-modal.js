  const USUARIO = 'Lola';
  const PASSWORD = '1234';

Vue.component('login-modal',{
    template: `
    <div v-show="modalLogin" class="modal text-white" tabindex="-1" style="display: block;">
    <div class="modal-dialog">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <p class="modal-title text-uppercase">Iniciar sesión</p>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" @click="cerrarModalLogin"></button>
        </div>

        <form @submit.prevent="loginOnServer">

         <div class="modal-body pb-0">
            <label for="usuario" class="form-label">Ingresá tu usuario</label>
            <input type="text" id="usuario" v-model="usuario">
        </div>  

        <div class="modal-body">
            <label for="pass" class="form-label">Ingresá tu contraseña</label>
            <input type="password" id="pass" v-model="password">
        </div>

        <div class="pt-1 pb-2 ps-3 pe-3">
            <p>Por favor, confirmá que no sos un robot</p>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="robot" id="flexCheckDefault" v-model="robot">
                <label class="form-check-label" for="flexCheckDefault">
                No soy un robot
                </label>
            </div>
        </div>
        <div class="modal-errors mt-3">
          <div v-for="error in errors" class="alert alert-danger rounded-0" role="alert">
          {{error}}
          </div>
        </div>
        <div class="modal-footer">
            <input type="submit" value="Iniciar sesión" class="btn btn-light" :disabled="loginIsDisabled">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="cerrarModalLogin">Cancelar</button>
        </div>
        </form>

      </div>
    </div>
</div>
    `,
    data: function(){
      return {
        errors: [],
        usuario: "",
        password: "",
        robot:[]
       
      }
    },
    props: ['modalLogin', 'cerrarModalLogin', 'iniciarSesion'],

    computed: {
      loginIsDisabled: function(){
        return this.robot.length !== 1
      }
    },

    methods: {
    loginOnServer: function(){
      this.errors = [];
       //verificamos que el password sea correcto
       if(this.password !== PASSWORD){
        this.errors.push("La contraseña es incorrecta");
        if(this.usuario !== USUARIO){
        this.errors.push("El usuario ingresado es incorrecto");
        
       }
       return;
       }
         new Promise((success, error) => {

          setTimeout(() => {
            success();
          },1000);
        })

          .then(() => {

            this.iniciarSesion();

          })

      
      }

    },
})
