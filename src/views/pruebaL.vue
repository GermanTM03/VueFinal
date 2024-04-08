<template>
    <div class="Cuerpo">
      <div class="InicioSesion">
        <img src="../assets/icons/Icon_principal.png" alt="" />
        <div class="Formulario">
          <form @submit.prevent="registerAct">
            <div class="input_box">
              <input type="text" id="titulo" v-model="titulo" placeholder="Título" required />
              <i class="bx bx-user"></i>
            </div>
            <div class="input_box">
              <textarea id="descripcion" v-model="descripcion" placeholder="Descripción" required></textarea>
              <i class="bx bx-user"></i>
            </div>
            <div class="input_box">
              <input type="number" id="importancia" v-model="importancia" placeholder="Importancia" required />
              <i class="bx bx-user"></i>
            </div>
            <div class="input_box">
              <input type="date" id="fechaTermino" v-model="fechaTermino" required />
              <i class="bx bx-calendar"></i>
            </div>
            <button type="submit">Crear Actividad</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import UserService from '@/services/AuthServices'
  import type IActividad from '@/interface/IActividad'
  import { useRouter } from 'vue-router'
  
  let titulo = ref('')
  let descripcion = ref('')
  let importancia = ref(0)
  let fechaTermino = ref('')
  let usuarioID = ref(1) // Puedes obtener el ID del usuario desde la sesión o de donde corresponda
  let act = ref<IActividad | null>(null)


  
  const router = useRouter()
  
  async function registerAct() {
    try {
      if (!titulo.value || !descripcion.value || !importancia.value || !fechaTermino.value) {
        throw new Error('Todos los campos son obligatorios');
      }
  
      const newAct: IActividad = {
        ID: 0, // Puedes dejarlo como 0 o como undefined, dependiendo de si se asigna en el backend o no
        UsuarioID: usuarioID.value,
        Descripcion: descripcion.value,
        Importancia: importancia.value,
        FechaTermino: new Date(fechaTermino.value),
        FechaCreacion: new Date(),
        Titulo: titulo.value
      };
      
      act.value = await UserService.registerAct(newAct);
      
      // Redirigir al usuario a donde corresponda después de crear la actividad
      router.push('/L'); // Por ejemplo, redirigir a la página de inicio
  
      // Limpiar los campos después de crear la actividad
      titulo.value = ''
      descripcion.value = ''
      importancia.value = 0
      fechaTermino.value = ''
    } catch (error) {
      console.error('No se pudo crear la actividad:', error)
    }
  }
  </script>
  
  <style scoped>
  /* Estilos CSS aquí */
  </style>
  