import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import api from '../services/api';

export default function SpotList({ tech }){
  const [ spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots(){
      const response = await api.get('/spots', {
        params : { tech }
      })

      setSpots(response.data);
    }

    loadSpots();
  } , []);
  
  return (
    <View style= {styles.container}>
      <Text style={styles.title}>Empresas que usam<Text style={style.bold}>{ tech }</Text></Text>

      <FlatList 
        style={styles.list}
        data={spots}
        keyExtractor={spot => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
            <Text style={styles.company}>{ item.company }</Text>
            <Text style={styles.price}>{ item.price ? `R$${item.price}/Dia` : 'GRATUITO' }</Text>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text style={styles.buttonText}>Solicitar Reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
  marginTop: 30,
  },

  title : {
    fontSize: 20,
    color: '#444',
    paddingHorizontal:20,
    marginBottom:15,
  },

  bold : {
    fontWeight:'bold',
  },
});