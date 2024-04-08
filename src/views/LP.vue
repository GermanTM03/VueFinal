<template>
  <div>
    <h1>Las Actividades:</h1>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Descripción</th>
          <th>Importancia</th>
          <th>Fecha de Término</th>
          <th>Fecha de Creación</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="act in Actividad" :key="act.ID">
          <td>{{ act.titulo }}</td>
          <td>{{ act.descripcion }}</td>
          <td>{{ act.importancia }}</td>
          <td>{{ act.fechaTermino }}</td>
          <td>{{ act.fechaCreacion }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

// En tu componente Vue

// En tu componente Vue

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AuthServices from '@/services/AuthServices' // Importar todo el objeto AuthServices
import type IActividad from '@/interface/IActividad'

const Actividad = ref<IActividad[]>([])

onMounted(async () => {
  Actividad.value = await AuthServices.obtenerActividades() // Llama al método obtenerActividades de AuthServices
})
</script>


