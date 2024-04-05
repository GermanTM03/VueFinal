<template>
    <header class="main-header">
      <div class="left-section">
        <!-- Icono de configuración -->
        <span class="icon config-icon" @click="goToConfigPage">⚙️</span>
        <!-- Icono de usuario -->
        <span class="icon user-icon" @click="goToUserProfile">👤</span>
      </div>
      <!-- Aquí podrías incluir el título o cualquier otro contenido del header -->
      <div class="title">Mi Aplicación</div>
    </header>
    <div class="ContenedorRender">
      <RouterView />
      
    </div>
  </template>
  
  <script lang="ts">
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Header',
    setup() {
      const router = useRouter();
  
      const goToConfigPage = () => {
        // Redirige al usuario a la página de configuración
        router.push('/Login');
      };
  
      const goToUserProfile = () => {
        // Redirige al usuario a la página de perfil
        router.push('/Registro');
      };
  
      return { goToConfigPage, goToUserProfile };
    }
  }
  </script>
  
  <style scoped>
  /* Estilos del header */
  .main-header {
    background-color: #6028FF;
    color: white;
    display: flex;
    align-items: center;
    padding: 1rem;
  }
  
  /* Estilos de los iconos */
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  
  /* Estilos del título */
  .title {
    font-size: 1.5rem;
    margin-left: auto; /* Mueve el título hacia la derecha */
  }

  .ContenedorRender{
    width: 100%;
    background-color: aqua;
    margin: 0;
  }
  </style>
  