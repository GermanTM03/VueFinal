<template>
  <div>
    <!-- Mostrar la pantalla de carga mientras se carga la aplicación -->
    <div v-if="isLoading" class="Box_Loading">
      <!-- Puedes personalizar esta sección según tus necesidades -->
      <div class="centrar">
        <img src="./assets/icons/Icon_principal.png" alt="Cargando...">
        <div class="spinner"></div>
      </div>
    </div>

    <!-- Mostrar el contenido de la aplicación una vez que se ha cargado -->
    <div v-else>
      <!-- Renderizar el componente Inicio.vue -->
      <Inicio />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Inicio from './views/InicioView.vue';

const isLoading = ref(true);

onMounted(() => {
  // Simular una carga inicial (puedes cambiar esto según tus necesidades)
  setTimeout(() => {
    isLoading.value = false; // Cambiar el estado para indicar que la carga ha finalizado
  }, 2000); // Simulación de una carga de 2 segundos
});
</script>

<style scoped>
/* Estilos para el spinner de carga */
.spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-top-color: #3559fa;
  margin-left: 36%;
  animation: spin 0.8s linear infinite;
}

.Box_Loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
