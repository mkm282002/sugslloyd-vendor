import { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import ContainerComponent from "../components/ContainerComponent";
import { styles } from "../styles/components.styles";
import MyHeader from "../components/header/MyHeader";
import { H5, P } from "../components/text";
import SearchBar from "../components/input/SearchBar";
import MyFlatList from "../components/utility/MyFlatList";
import { inventory } from "../utils/faker";
import { spacing } from "../styles";

export default function InventoryScreen() {
  const [searchText, setSearchText] = useState("");

  return (
    <ContainerComponent>
      <MyHeader title="Inventory" hasIcon={true} isBack={true} />
      <MyFlatList
        data={inventory}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() =>
          <SearchBar
            placeholder="Search by name or code"
            value={searchText}
            onChangeText={setSearchText}
            style={{ marginVertical: 8, marginHorizontal: 4 }}
          />}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image
              source={{ uri: item.url }}
              style={[{ width: 60, height: 60 }, spacing.mr4, spacing.br2]}
            />
            <View style={{ flex: 1 }}>
              <H5>{item.name}</H5>
              <P>{item.description}</P>
              <View style={styles.quantityContainer}>
                <P style={styles.productQuantity}>Qty: {item.qty_stock} {item.unit}</P>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </ContainerComponent>
  );
};
