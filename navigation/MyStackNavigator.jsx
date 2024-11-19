import MyMaterialBottomNavigator from "./MyMaterialBottomNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";
import FormScreen from "../screens/FormScreen";
import NotificationScreen from "../screens/NotificationScreen";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import ProjectTimeline from "../screens/ProjectTimeline";
import TotalEarningScreen from "../screens/TotalEarningScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingScreen";
import InternalSetting from "../screens/InternalSetting";
import FileUploadScreen from "../screens/FileUploadScreen";
import InventoryScreen from "../screens/InventoryScreen";
import RequirementsScreen from "../screens/SiteScreen";
import NoTask from "../screens/NoTask";
import ProjectsScreen from "../screens/ProjectsScreen";
import CurrentProjectsScreen from "../screens/CurrentProjectsScreen";
import TasksScreen from "../screens/TasksScreen";
import ViewDetailScreen from "../screens/ViewDetailScreen";
const Stack = createNativeStackNavigator();
export default function MyStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="loginScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="loginScreen" component={LoginScreen} />
      <Stack.Screen name="dashboardScreen" component={DashboardScreen} />
      <Stack.Screen name="homeScreen" component={MyMaterialBottomNavigator} />
      <Stack.Screen name="projectTimeLine" component={ProjectTimeline} />
      <Stack.Screen name="formScreen" component={FormScreen} />
      <Stack.Screen name="notificationScreen" component={NotificationScreen} />
      <Stack.Screen name="privacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="profileScreen" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="internalSetting" component={InternalSetting} />
      <Stack.Screen name="NoTask" component={NoTask} />
      <Stack.Screen name="fileUploadScreen" component={FileUploadScreen} />
      <Stack.Screen name="inventoryScreen" component={InventoryScreen} />
      <Stack.Screen name="totalEarningScreen" component={TotalEarningScreen} />
      <Stack.Screen name="requirementsScreen" component={RequirementsScreen} />
      <Stack.Screen name="projectsScreen" component={ProjectsScreen} />
      <Stack.Screen
        name="CurrentProjectsScreen"
        component={CurrentProjectsScreen}
      />
      <Stack.Screen name="taskScreen" component={TasksScreen} />
      <Stack.Screen name="viewDetailScreen" component={ViewDetailScreen} />
    </Stack.Navigator>
  );
}
