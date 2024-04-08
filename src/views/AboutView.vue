<template>
  <div class="Cuerpo">
    <div class="InicioSesion" v-if="!isLoggedIn">
      <img src="../assets/icons/Icon_principal.png" alt="" />
      <div class="Formulario">
        <form @submit.prevent="login">
          <div class="input_box">
            <input type="text" placeholder="Correo" v-model="email" required />
            <i class="bx bx-user"></i>
          </div>
          <div class="input_box">
            <input type="password" placeholder="Contraseña" v-model="password" required />
            <i class="bx bxs-lock-alt"></i>
          </div>

          <button type="submit">Ingresar</button>
        </form>
      </div>
      <div class="Pregunta">
        <p>No tienes cuenta? <router-link to="/Registro">Regístrate</router-link></p>
      </div>
    </div>

    <button v-if="isLoggedIn" @click="logout">Cerrar sesión</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import UserService from '@/services/AuthServices'

let email = ref('')
let password = ref('')
const router = useRouter()

// Comprobación de la sesión del usuario utilizando localStorage
const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true')

async function login() {
  try {
    if (!email.value || !password.value) {
      throw new Error('Todos los campos son obligatorios');
    }

    const userData = await UserService.loginUser(email.value, password.value);

    if (userData) {
      // Guardar el estado de la sesión en localStorage
      localStorage.setItem('isLoggedIn', 'true')
      alert(`Nombre: ${userData.userId}, Correo: ${userData.user}`);
      console.log('Datos del usuario:', userData);
      router.push('/LP');
    } else {
      console.error('Credenciales incorrectas');
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  }
}

function logout() {
  // Eliminar el estado de la sesión del localStorage
  localStorage.removeItem('isLoggedIn')
  // Redirigir al usuario a la página de inicio de sesión
  router.push('/')
}
</script>

<style scoped>
/* Estilos CSS */
</style>
