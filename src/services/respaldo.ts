import type IUser from '@/interface/IUser'
import type IActividad from '@/interface/IActividad'
const API_URL = 'https://localhost:7183/DailySync'

export default {

        
  async registerUser(newUser: IUser): Promise<void> {
    try {
      const response = await fetch(`${API_URL}/Createpersona`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser) // Enviamos el objeto completo newUser
      });
      if (!response.ok) {
        throw new Error('No se pudo registrar el usuario');
      }
    } catch (error) {
      console.error(error);
    }
  },
  async registerAct(newAct: IActividad): Promise<void> {
    try {
      const response = await fetch(`${API_URL}/Createactividad`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAct) // Enviamos el objeto completo newUser
      });
      if (!response.ok) {
        throw new Error('No se pudo registrar el usuario');
      }
    } catch (error) {
      console.error(error);
    }
  },
  


  async getUsers(): Promise<IUser[]> {
    try {
      const response = await fetch(`${API_URL}/Usuarios`)
      if (!response.ok) {
        throw new Error('No se pudieron recuperar los datos de los usuarios')
      }
      const data = await response.json()
      return data.result // Devuelve la propiedad 'result' que contiene los usuarios
    } catch (error) {
      console.error(error)
      return [] // Retorna un array vacío en caso de error
    }
  },
  async getActividad(): Promise<IActividad[]> {
    try {
      const response = await fetch(`${API_URL}/Actividades`)
      if (!response.ok) {
        throw new Error('No se pudieron recuperar los datos de los usuarios')
      }
      const data = await response.json()
      return data.result // Devuelve la propiedad 'result' que contiene los usuarios
    } catch (error) {
      console.error(error)
      return [] // Retorna un array vacío en caso de error
    }
  },
  async loginUser(email: string, password: string): Promise<IUser | null> {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correo: email, contraseña: password }) // Enviamos el correo y la contraseña
      });

      if (!response.ok) {
        // Si la respuesta no es satisfactoria, lanza un error o maneja el caso según tu lógica de aplicación
        throw new Error('No se pudo iniciar sesión');
      }

      const data = await response.json();

      if (!data) {
        // Si no hay datos en la respuesta, devuelve null
        return null;
      }

      // Devuelve el usuario autenticado
      return data;
    } catch (error) {
      console.error(error);
      return null; // Retorna null en caso de error
    }
  }




}



