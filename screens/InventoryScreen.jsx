import { useState } from "react";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import SearchBar from "../components/input/SearchBar";
import MyFlatList from "../components/utility/MyFlatList";
import { inventory } from "../utils/faker";
import InventoryCard from "../components/card/InventoryCard";
import NoRecord from "./NoRecord";
import { useTranslation } from "react-i18next";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../components/buttons/Button";
import { ICON_MEDIUM, LIGHT, styles, spacing, SCREEN_WIDTH } from "../styles";
import { View } from "react-native";

export default function InventoryScreen() {
  const [searchText, setSearchText] = useState("");
  const { t } = useTranslation()

  return (
    <ContainerComponent>
      <MyHeader title={t('inventory_title')} hasIcon={true} isBack={true} />

      <MyFlatList
        data={inventory}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <View style={[styles.row, spacing.mh2, spacing.mb5, { alignItems: 'center' }]}>
            <SearchBar
              value={searchText}
              onChangeText={setSearchText}
              style={{ width: SCREEN_WIDTH - 70 }}
            />
            <Button style={[styles.btn, styles.bgPrimary, spacing.mh1, { width: 50 }]}>
              <Icon name="options-outline" size={ICON_MEDIUM} color={LIGHT} />
            </Button>
          </View>
        )}
        ListEmptyComponent={() => (
          <NoRecord msg={t('no_inventory')} />
        )}
        renderItem={({ item }) => <InventoryCard item={item} />}
      />
    </ContainerComponent>
  );
}
