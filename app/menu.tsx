import { View, Text, Appearance, ColorSchemeName, Platform, ScrollView, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { FlatList } from 'react-native-gesture-handler';
import { MENU_ITEMS } from '@/constants/MenuItem';

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme)
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView; 
    const separatorComp = <View style={styles.separator}></View>

  return (
    <Container>
        <FlatList data={MENU_ITEMS}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => separatorComp}

            renderItem={({item}) => (
                <View style={styles.row}>
                    <Image source={item.image} style={styles.image} />
                    <View >
                        <Text style={styles.menuTextRow}>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.price}</Text>
                    </View>
                </View>
            )}>

        </FlatList>
    </Container>
  )
}

function createStyles(theme: any, colorScheme: ColorSchemeName) {
    return StyleSheet.create({
        contentContainer: {
            padding: 20,
        },
        container: {
            flex: 1,
            backgroundColor: theme.background,
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.text,
        },
        separator: {
            marginVertical: 1,
            height: 1,
            backgroundColor: colorScheme === 'dark' ? 'black' : 'lightgray',
        },
        row:{
          flexDirection: 'row', 
          width: '100%',
          marginBottom: 10,
          borderStyle: 'solid', 
          borderColor: '#000', 
          borderWidth: 1, 
          borderRadius: 20, 
          overflow: 'hidden', 
          marginHorizontal:'auto'
        },
        menuTextRow:{
            fontWeight: 'bold'
        }, 
        image:{
            height:100, 
            width: 100
        }
    });
}