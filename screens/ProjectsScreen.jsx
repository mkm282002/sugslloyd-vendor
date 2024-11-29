import { useState } from "react";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import SearchBar from "../components/input/SearchBar";
import ClickableCard from "../components/card/Clickablecard";
import MyFlatList from "../components/utility/MyFlatList";
<<<<<<< HEAD
import NoRecord from '../screens/NoRecord'

export default function ProjectsScreen({ route, navigation }) {
  const [searchText, setSearchText] = useState("");
=======
import NoRecord from "../screens/NoRecord";
import { View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../components/buttons/Button";
import { LIGHT, SCREEN_WIDTH, spacing, styles, ICON_MEDIUM } from "../styles";
import { useTranslation } from "react-i18next";

export default function ProjectsScreen({ route, navigation }) {
  const [searchText, setSearchText] = useState("");
  const { t } = useTranslation();
>>>>>>> a85e4be1654a673a6c01d9c3c97de764acfbdfdc

  const { DATA, title } = route.params;

  const handleViewDetails = (item) => {
    navigation.navigate("viewDetailScreen", {
      site: item,
      formType: "project",
    });
  };

  return (
    <ContainerComponent>
      <MyHeader isBack title={t(title)} hasIcon />

      <MyFlatList
        data={DATA}
        renderItem={({ item, index }) => (
          <ClickableCard
            key={index}
            item={item}
            handleViewDetails={handleViewDetails}
            isProject={true}
          />
        )}
<<<<<<< HEAD
        ListEmptyComponent={() => (
          <NoRecord msg="Oops! No Projects available right now..." />
        )}
=======
        ListEmptyComponent={() => <NoRecord msg={t("no_project")} />}
>>>>>>> a85e4be1654a673a6c01d9c3c97de764acfbdfdc
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[spacing.mh2]}
          >
            <View style={[spacing.mv4, styles.row, { alignItems: "center" }]}>
              <SearchBar style={{ width: SCREEN_WIDTH - 70 }} />
              <Button
                style={[
                  styles.btn,
                  styles.bgPrimary,
                  spacing.mh1,
                  { width: 50 },
                ]}
              >
                <Icon name="options-outline" size={ICON_MEDIUM} color={LIGHT} />
              </Button>
            </View>
          </ScrollView>
        )}
      />
    </ContainerComponent>
  );
}
