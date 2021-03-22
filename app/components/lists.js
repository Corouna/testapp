import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { ConversationContext } from './../context'; 

// Hardcoded for randomized display purpose. We only have 2 list for display anyway
const idPool = ['605154d68fca3414ee123b23', '605015958fca3414ee12386c'];

const Item = ({ title, id, click }) => (
  <TouchableHighlight onPress = {click}>
    <View style={styles.item} onClick={click}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{id}</Text>
    </View>
  </TouchableHighlight>
);

const Lists = ({ data }) => {
  const { getByID } = React.useContext(ConversationContext);

  const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} click={() => getByID('605015958fca3414ee12386c')} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#38A484'
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 12
  }
});

export default Lists;