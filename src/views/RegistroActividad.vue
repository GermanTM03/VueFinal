<template>
    <div class="Cuerpo">
      <div class="InicioSesion">
        <img src="../assets/icons/Icon_principal.png" alt="" />
        <div class="Formulario">
          <div v-if="actividad">
            <p><strong>Usuario ID:</strong> {{ actividad.UsuarioID }}</p>
            <p><strong>Descripción:</strong> {{ actividad.Descripcion }}</p>
            <p><strong>Importancia:</strong> {{ actividad.Importancia }}</p>
            <p><strong>Fecha de Término:</strong> {{ actividad.FechaTermino }}</p>
            <p><strong>Fecha de Creación:</strong> {{ actividad.FechaCreacion }}</p>
            <p><strong>Título:</strong> {{ actividad.Titulo }}</p>
          </div>
          <form @submit.prevent="registerActividad">

            <div class="input_box">
              <input type="text" id="descripcion" v-model="descripcion" placeholder="Descripción" required />
              <i class="bx bx-user"></i>
            </div>
            <div class="input_box">
              <input type="number" id="importancia" v-model="importancia" placeholder="Importancia" required />
              <i class="bx bx-user"></i>
            </div>
            <div class="input_box">
              <input type="datetime-local" id="fechaTermino" v-model="fechaTermino" placeholder="Fecha de Término" required />
              <i class="bx bx-user"></i>
            </div>
            <div class="input_box">
              <input type="datetime-local" id="fechaCreacion" v-model="fechaCreacion" placeholder="Fecha de Creación" required />
              <i class="bx bx-user"></i>
            </div>
            <div class="input_box">
              <input type="text" id="titulo" v-model="titulo" placeholder="Título" required />
              <i class="bx bx-user"></i>
            </div>
  
            <button type="submit">Registrar Actividad</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import type IActividad from '@/interface/IActividad'
  
  let userID = ref<number>(1)
  let descripcion = ref('')
  let importancia = ref<number>(0)
  let fechaTermino = ref<string>('')
  let fechaCreacion = ref<string>('')
  let titulo = ref('')
  let actividad = ref<IActividad | null>(null)
  
  async function registerActividad() {
    try {
      const newActividad: IActividad = {
        ID: 0, // Se podría dejar como 0 o como undefined, dependiendo de si se asigna en el backend o no
        UsuarioID: userID.value,
        Descripcion: descripcion.value,
        Importancia: importancia.value,
        FechaTermino: new Date(fechaTermino.value),
        FechaCreacion: new Date(fechaCreacion.value),
        Titulo: titulo.value
      };
      actividad.value = await ActividadService.registerActividad(newActividad);
      // Limpiar los campos después de registrar la actividad
      userID.value = 0
      descripcion.value = ''
      importancia.value = 0
      fechaTermino.value = ''
      fechaCreacion.value = ''
      titulo.value = ''
    } catch (error) {
      console.error('No se pudo registrar la actividad:', error)
    }
  }
  </script>
  
  <style scoped>
  /* Estilos CSS aquí */
  </style>
  