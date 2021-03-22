import React from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';
import { Section } from '.';

const Item = ({ data }) => (
  <View style={styles.row}>
    <View style={styles.container}>
      <View style={styles.imageBlock}>
        <Image 
          style={styles.image} 
          source={{
            // uri: Boolean(data.phrases) && data.phrases.recording.image_url || data.recording.image_url
            uri: 'https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg'
          }} 
        />
      </View>
      <View style={styles.itemBlock}>
        <Text style={styles.title}>Conversation {data.id}</Text>
      </View>
    </View>
  </View>
);

const SubLists = ({ data }) => {
  const renderItem = ({ item }) => (
    <Item data={item} />
  );

  return (
    <React.Fragment>
      <Section title={data.title}>
        <Text>{data.id}</Text>
      </Section>
      <Item data={data.rootPhrase} />
      <FlatList
        data={data.branches}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 6,
    marginVertical: 4,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#38A484',
    width: '70%'
  },
  imageBlock: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '20%',
    marginHorizontal: 5
  },
  image: {
    borderRadius: 6,
    width: 50,
    height: 60
  },
  itemBlock: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '70%',
    marginHorizontal: 5
  },
  title: {
    fontSize: 13,
  }
});

export default SubLists;