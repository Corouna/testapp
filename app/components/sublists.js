import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { Section } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const Item = ({ data }) => {
  let clone = Boolean(data.phrases) && Boolean(data.phrases.length) && [ ...data.phrases ] || [];
  let pRoot = Boolean(clone.length) && clone.shift() || data;
  let pRest = clone;

  return (
    <View style={styles.row}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.hScrollerView}>
        <View style={styles.container}>
          <View style={styles.imageBlock}>
            <Image 
              style={styles.image} 
              source={{
                uri: Boolean(pRoot.recording) && pRoot.recording.image_url || 'https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg'
              }} 
            />
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.title}>{Boolean(pRoot.recording) && pRoot.recording.title || ""}</Text>
          </View>
        </View>
        {
          Boolean(pRest.length) && 
          pRest.map( p => (
            <View key={p.id} style={styles.audioBlock}>
              <Image 
                style={styles.image} 
                source={{
                  uri: Boolean(p.recording) && p.recording.image_url || 'https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg'
                }} 
              />
            </View>
          ))
        }
      </ScrollView>
      <View style={styles.listContainer}>
          <View style={styles.dotContainer}>
            <View style={styles.vDividerTop}></View>
            <FontAwesomeIcon icon={ faDotCircle } style={styles.dotCircle} />
            <View style={styles.vDividerBottom}></View>
          </View>
      </View>
    </View>
  );
}

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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    width: '100%'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    paddingVertical: 6,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#38A484',
    width: 250
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
  textBlock: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '70%',
    marginHorizontal: 5
  },
  title: {
    fontSize: 13,
  },
  soundContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'yellow',
    paddingVertical: 6,
    paddingHorizontal: 15
  },
  audioBlock: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: 15
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    width: '100%',
    marginHorizontal: 10,
    borderColor: 'red',
  },
  hScrollerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '15%',
    height: 50,
    position: 'relative',
  },
  dotCircle: {
    position: 'absolute',
    top: 10,
    right: 0
  },
  vDividerTop: {
    borderRightColor: '#38A484',
    borderWidth: 0.7,
    height: 10,
    position: 'absolute',
    right: 7,
    top: 0
  },
  vDividerBottom: {
    borderRightColor: '#38A484',
    borderWidth: 0.7,
    height: 25,
    position: 'absolute',
    right: 7,
    bottom: 0
  }
});

export default SubLists;