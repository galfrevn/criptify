import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ListItem = ({ name, symbol, currentPrice, priceChange, logoUrl }) => {

  const priceChangeColor = priceChange > 0 ? "#34C759" : "#FF3830";

  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        <View style={styles.leftWrapper}>
          <Image source={{ uri: logoUrl }} style={styles.image} />
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subTitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>

        <View style={styles.rightWrapper}>
          <Text style={styles.title}>
            ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
          </Text>
          <Text style={[styles.subTitle, { color: priceChangeColor }]}>
            {priceChange.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    height: 48,
    width: 48,
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  titlesWrapper: {
    marginLeft: 8,
  },
  rightWrapper: {
    alignItems: "flex-end",
  },
  title: {
    fontSize: 18,
    fontWeight: '600'
  },
  subTitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#A9ABB1",
  },
});

export default ListItem;
