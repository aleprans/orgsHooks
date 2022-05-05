import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

import Estrelas from '../../../componentes/Estrelas'

export default function Produtor({ name, imagem, distancia, estrelas}) {
  const [selecionado, setSelecionado] = useState(false)

  return <TouchableOpacity 
        style={estilos.cartao}
        onPress={() => setSelecionado(!selecionado)}
      >
    <Image source={imagem} style={estilos.imagem} accessibilityLabel= {name}/>
    <View style={estilos.info}>
      <View>
        <Text style={estilos.nome}>{ name }</Text>
        <Estrelas 
          quantidade={estrelas}
          editavel={selecionado}
          grande={selecionado}
        />
      </View>
      <Text style={estilos.dist}>{ distancia }</Text>
    </View>
  </TouchableOpacity>
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#f0f0f0',
    marginVertical: 8,
    marginHorizontal:16,
    borderRadius: 6,
    flexDirection: 'row',
    //Sombra Andriod
    elevation: 4,
    // sombra IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold'
  },
  dist: {
    fontSize: 12,
    lineHeight: 19
  }
})