<template>
  <div>
    <h1>Los Usuarios:</h1>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>PWD</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.ID">
          <td>{{ user.usuario }}</td>
          <td>{{ user.correo }}</td>
          <td>{{ user.contraseña }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AuthServices from '@/services/AuthServices' // Importar todo el objeto AuthServices
import type IUser from '@/interface/IUser'

const users = ref<IUser []>([]) // Cambiado 'user' a 'users'

onMounted(async () => {
  users.value = await AuthServices.obtenerUsuarios() // Cambiado 'user' a 'users'
})
</script>
