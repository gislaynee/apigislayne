import { api } from "./api";

export async function getUsuario(){
    try{
        const resultado = await api.get()
        return resultado.data.results
    } catch (error) {
        console.log(error)
        return{}
    }
}