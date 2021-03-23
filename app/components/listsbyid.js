import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { Section } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const Item = ({ root, child, idx }) => (
	<View style={styles.row}>
		{
				Boolean(idx > 0 ) &&
				<View style={styles.nodeContainer}>
					<View style={styles.dotContainer}>
						<View style={styles.vDividerTop}></View>
						<FontAwesomeIcon icon={ faDotCircle } style={styles.dotCircle} />
						<View style={styles.vDividerBottom}></View>
						{ Boolean(child.length) && <View style={styles.hDividerBottom}></View> }
					</View>
					{
						Boolean(child.length > 0) && 
						<React.Fragment>
							<View style={styles.spaceContainer}>
									<View style={styles.sDividerBottom}></View>
							</View>
							{
									child.map( (p, ind) => (
											<View key={ind} style={styles.audioNodeContainer}>
													<View style={Boolean(ind === child.length - 1) && styles.nhDividerBottom || styles.nhDividerBottomFull}></View>
													<View style={styles.nvDividerBottom}></View>
											</View>
									))
							}
						</React.Fragment>
					}
			</View>
		}
		<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.hScrollerView}>
			<View style={styles.container}>
				<View style={styles.imageBlock}>
					<Image 
						style={styles.image} 
						source={{
							uri: Boolean(root.recording) && root.recording.image_url || 'https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg'
						}} 
					/>
				</View>
				<View style={styles.textBlock}>
					<Text style={styles.title}>{Boolean(root.recording) && root.recording.title || ""}</Text>
				</View>
			</View>
			{
				Boolean(child.length) && 
				child.map( p => (
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
	</View>
);


const ListsById = ({ data }) => {
  const renderItem = ({ item, index }) => {
		console.log('Index ', index, ' has length of ', item.child.length ,' and is ', Boolean(item.child.length), ' - ', item.child);

   return (<Item root={item.root} child={item.child} idx={index} />);
	};

  return (
    <React.Fragment>
      <Section title={data.title}>
        <Text>{data.id}</Text>
      </Section>
      <FlatList
        data={data.list}
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

export default ListsById;