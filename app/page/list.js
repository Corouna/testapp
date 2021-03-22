import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Lists, SubLists } from './../components';
import { ConversationContext } from './../context'; 

const ConversationList = () => {
    const { conv, subConv } = React.useContext(ConversationContext);

    return (
        <SafeAreaView style={styles.container}>
            {
                Boolean(conv.length) && !Boolean(subConv) && <Lists data={conv} />
            }
            {
                Boolean(subConv) && <SubLists data={subConv} />
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
});

export default ConversationList;