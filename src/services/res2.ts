import axios from 'axios'
import type IUser from '@/interface/IUser'
import type IActividad from '@/interface/IActividad'

const API_URL = 'http://www.dailysync.somee.com/api'

export default {
  async obtenerUsuarios(): Promise<IUser[]> {
    try {
      const response = await axios.get<{ mensaje: string; response: IUser[] }>(
        `${API_URL}/Usuarios`
      )
      console.log(response.data) // Verifica qué está devolviendo la API
      return response.data.response // Devuelve response.data.response
    } catch (error) {
      console.error('No se pudieron recuperar las actividades:', error)
      return [] // En caso de error, devuelve un arreglo vacío
    }
  },
  async obtenerActividades(): Promise<IActividad[]> {
    // Corregido: eliminado 'function' de la definición de la función
    try {
      const response = await axios.get<{ mensaje: string; response: IActividad[] }>(
        `${API_URL}/Actividades`
      )
      console.log(response.data) // Verifica qué está devolviendo la API
      return response.data.response // Devuelve response.data.response
    } catch (error) {
      console.error('No se pudieron recuperar las actividades:', error)
      return [] // En caso de error, devuelve un arreglo vacío
    }
  },
  async login(correo: string, contraseña: string): Promise<IUser | null> {
    try {
      const response = await axios.post<{ mensaje: string; usuario: IUser }>(`${API_URL}/Login`, {
        correo,
        contraseña
      })
      console.log(response.data) // Verifica qué está devolviendo la API
      // Devuelve los datos del usuario si el login fue exitoso
      return response.data.usuario
    } catch (error) {
      console.error('Error en el login:', error)
      return null // Devuelve null en caso de error
    }
  },
  async registerAct(newAct: IActividad): Promise<void> {
    try {
      const response = await axios.post(`${API_URL}/CrearAct`, newAct, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.data.success) {
        console.log('La creación de la actividad Existoso.') // Puedes agregar manejo de errores específico aquí si lo deseas
      } else {
        console.log('La actividad se ha creado exitosamente.') // Puedes agregar manejo de éxito específico aquí si lo deseas
      }
    } catch (error) {
      console.error('Error al crear la actividad:', error)
    }
  },
  async registerUsuario(newUser: IUser): Promise<void> {
    try {
      const response = await axios.post(`${API_URL}/CrearUsuario`, newUser, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.data.success) {
        console.log('La creación fue exitoso.') // Puedes agregar manejo de errores específico aquí si lo deseas
      } else {
        console.log('El Usuario se ha creado exitosamente.') // Puedes agregar manejo de éxito específico aquí si lo deseas
      }
    } catch (error) {
      console.error('Error al crear la usuario:', error)
    }
  }
}
