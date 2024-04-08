<template>
  <div class="Cuerpo">
    <div class="InicioSesion">
      <img src="../assets/icons/Icon_principal.png" alt="" />
      <div class="Formulario">
        <form @submit.prevent="loginUsuario">
          <div class="input_box">
            <input type="email" placeholder="Correo" v-model="correo" required />
            <i class="bx bx-user"></i>
          </div>
          <div class="input_box">
            <input type="password" placeholder="Contraseña" v-model="contraseña" required />
            <i class="bx bxs-lock-alt"></i>
          </div>
          <p v-if="mensajeError" style="color: red;">{{ mensajeError }}</p>

          <button type="submit">Ingresar</button>
        </form>
      </div>
      <div class="Pregunta">
        <p>No tienes cuenta? <router-link to="/Registro">Regístrate</router-link></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthServices from '@/services/AuthServices'

const correo = ref<string>('');
const contraseña = ref<string>('');
const mensajeError = ref<string>('');
const router = useRouter();

const loginUsuario = async () => {
  const exito = await AuthServices.login(correo.value, contraseña.value);
  if (!exito) {
    mensajeError.value = 'Credenciales incorrectas';
  } else {
    alert('Inicio de sesión exitoso');
    router.push('/index');
  }
}
</script>

<style scoped>
.Cuerpo {
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.InicioSesion {
  margin-top: -10%;
  border-radius: 1rem;
  background-color: aliceblue;
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.InicioSesion img {
width: 15%;
height: 15%;
}

.Formulario {
  width: 100%;
  text-align: center;
}
.Formulario button{
  background-color: rebeccapurple;
  width: 10%;
  height: 30px;
  border-radius: 10px;
  color: white;
}
.Formulario .input_box {
  width: 90%;
  height: 50px;
  margin: 30px 0;
  position: relative;
}

.input_box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-size: 16px;
  color: #000000;
  padding: 0px 45px 0px 20px;
}
.input_box input::placeholder {
  color: rgb(0, 0, 0);
}
.input_box i {
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;
}

.Pregunta {
  margin-top: 20px;
  text-align: center;
}

.Pregunta a {
  text-decoration: none;
}
</style>
