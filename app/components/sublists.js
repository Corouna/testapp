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
            <View key={p.id} style={styles.soundContainer}>
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
      <View style={styles.nodeContainer}>
          <View style={styles.dotContainer}>
            <View style={styles.vDividerTop}></View>
            <FontAwesomeIcon icon={ faDotCircle } style={styles.dotCircle} />
            <View style={styles.vDividerBottom}></View>
            { Boolean(pRest.length) && <View style={styles.hDividerBottom}></View> }
          </View>
          {
            Boolean(pRest.length) && 
            <React.Fragment>
              <View style={styles.spaceContainer}>
                <View style={styles.sDividerBottom}></View>
              </View>
              {
                pRest.map( (p, idx) => (
                  <View style={styles.audioNodeContainer}>
                    <View style={idx === pRest.length && styles.nhDividerBottom || styles.nhDividerBottomFull}></View>
                    <View style={styles.nvDividerBottom}></View>
                  </View>
                ))
              }
            </React.Fragment>
          }
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
    borderColor: 'blue',
    width: 250,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 30,
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
    alignItems: 'flex-start',
    marginHorizontal: 15,
    width: 50,
    height: 60
  },
  nodeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    width: '100%',
    marginHorizontal: 10,
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
    width: '15%',
    height: 50,
    position: 'relative',
  },
  spaceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '51%',
    height: 50,
    position: 'relative',
  },
  audioNodeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 75,
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
  },
  hDividerBottom: {
    borderRightColor: '#38A484',
    borderWidth: 0.5,
    width: 7,
    position: 'absolute',
    right: 0,
    bottom: 10
  },
  sDividerBottom: {
    borderRightColor: '#38A484',
    borderWidth: 0.5,
    width: '100%',
    position: 'absolute',
    right: 0,
    bottom: 10
  },
  nhDividerBottom: {
    borderRightColor: '#38A484',
    borderWidth: 0.5,
    width: 50,
    position: 'absolute',
    left: 0,
    bottom: 10,
  },
  nhDividerBottomFull: {
    borderRightColor: '#38A484',
    borderWidth: 0.5,
    width: 75,
    position: 'absolute',
    left: 0,
    bottom: 10,
  },
  nvDividerBottom: {
    borderRightColor: '#38A484',
    borderWidth: 0.5,
    height: 10,
    position: 'absolute',
    left: 50,
    bottom: 0,
  }
});

export default SubLists;