import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { FetchResult, Photo } from '../types';

const HomeScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [photos, setPhotos] = useState<Photo[]>([]);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get<FetchResult>(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers: {
          Authorization: "u6NwPafU95CCd7u91p2IL66VQTNOjsj7gdtSsSSEOekFwMJAQTCPeMcZ",
        },
      });
      setPhotos(response.data.photos);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }: { item: Photo }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.src.medium }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for images..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={fetchPhotos} />
      <FlatList
        data={photos}
        style={styles.list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  list: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});

export default HomeScreen;