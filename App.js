import React from "react";
import ListItem from "./components/ListItem";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

import { SAMPLE_DATA } from './assets/data/sampleData';

const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>Criptify</Text>
    </View>
    <View style={styles.divider} />
  </>
)

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList 
        keyExtractor={(item) => item.id}
        data={SAMPLE_DATA}
        renderItem={({ item }) => (
          <ListItem 
            name={ item.name }
            symbol={ item.symbol }
            currentPrice={ item.current_price }
            priceChange={ item.price_change_percentage_7d_in_currency }
            logoUrl={ item.image }
          />
        )}
        ListHeaderComponent={<ListHeader />}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleWrapper: {
    marginTop: 80,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#A9ABB1",
    marginHorizontal: 16,
    marginTop: 16,
  },
});
