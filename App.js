import "react-native-gesture-handler"; //Don't ever remove this line
import { PaperProvider } from "react-native-paper";
import MyNavigationContainer from "./navigation/MyNavigationContainer";
import { Provider } from 'react-redux'
import store from "./store";
import i18n from './i18n'

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MyNavigationContainer />
      </PaperProvider>
    </Provider>
  );
}
