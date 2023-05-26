Vue.component('login-modal',{
    template: `
    <div v-show="modalLogin" class="modal text-white" tabindex="-1" style="display: block;">
    <div class="modal-dialog">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <p class="modal-title text-uppercase">Iniciar sesión</p>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" @click="cerrarModalLogin"></button>
        </div>

        <form @submit.prevent="iniciarSesion">

         <div class="modal-body pb-0">
            <label for="usuario" class="form-label">Ingresá tu usuario</label>
            <input type="text" id="usuario">
        </div>  

        <div class="modal-body">
            <label for="pass" class="form-label">Ingresá tu contraseña</label>
            <input type="password" id="pass">
        </div>

        <div class="pt-1 pb-2 ps-3 pe-3">
            <p>Por favor, confirmá que no sos un robot</p>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="robot" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                No soy un robot
                </label>
            </div>
        </div>
        <div class="modal-footer">
            <input type="submit" value="Iniciar sesión" class="btn btn-light">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="cerrarModalLogin">Cancelar</button>
        </div>
        </form>

      </div>
    </div>
</div>
    `,
    props: ['modalLogin', 'cerrarModalLogin', 'iniciarSesion'],
})