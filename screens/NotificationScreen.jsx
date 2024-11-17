import { View} from "react-native";
import { Avatar, List, Divider } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { notifications } from "../utils/faker";
import { styles } from "../styles/components.styles";
import { H2, H5, P } from "../components/text";
import MyFlatList from "../components/utility/MyFlatList";
import { PRIMARY_COLOR } from "../styles/constant";

export default function NotificationScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <List.Item
        title={<H5 style={styles.titleText}>{item.title}</H5>}
        description={<P style={styles.description}>{item.description}</P>}
        left={() => (
          <Avatar.Icon
            size={40}
            icon={item.icon}
           backgroundColor=  {PRIMARY_COLOR}
          />
        )}
        right={() => <H2 style={styles.time}>{item.time}</H2>}
      />
      <Divider />
    </TouchableOpacity>
  );

  return (
    <ContainerComponent>
      <MyHeader
        title="Notification"
        isBack={true}
        hasIcon={true}
        icon={"search-outline"}
      />
      <View>
        <MyFlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ContainerComponent>
  );
}
