import { View, Text, TextInput, Button, Image } from 'react-native'
import { getUsuario } from './../../../servicos/pegar_dados'
import { useEffect, useState } from 'react'
import { estilo } from './style'

export function VerUsuarios() {
    const [usuario, setUsuarios] = useState([])
    const [nome, setNome] = useState([])
    async function carregarUsuario() {
        const usuario = await getUsuario()
        setUsuarios(usuario[0].name)
    }
    return(
        <View>
             <Text>ESTA API GERA USUARIOS ALEATORIOS</Text>
            <Text>DUPLA GISLAYNE FERREIRA SILVA LIMA E MARIA CLARA ALVES</Text>
            <Image style={estilo.imagem} source={{ uri: 'https://i.pinimg.com/originals/ee/a7/f5/eea7f57d9d6537cd983f2c7bf58b16c3.jpg',}} />
            <TextInput onChangeText={setNome} placeholder="Nome"/>
            {nome!=''?<Text>{usuario.name}</Text>:<Text></Text>} 
            <Text>{usuario.first} {usuario.last}</Text>
            <Button title='Aleatorizar' onPress={carregarUsuario}/>
            
            
        </View>
       
      
 )
}
