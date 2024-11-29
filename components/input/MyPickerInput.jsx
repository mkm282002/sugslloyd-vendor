import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "../../styles/components.styles";
import { H5 } from "../text";
<<<<<<< HEAD
=======
import {useTranslation} from 'react-i18next'
>>>>>>> a85e4be1654a673a6c01d9c3c97de764acfbdfdc

export default function MyPickerInput({
  title,
  value,
  onChange,
  options = [],
}) {
  const {t}=useTranslation()
  return (
    <View style={styles.textInput}>
      <H5>{title}</H5>
      <Picker
        selectedValue={value}
        style={styles.textInputField}
        mode="dropdown"
        onValueChange={(val) => onChange(val)}
        prompt={t('option_title')}
      >
        {options.map((option, index) => (
          <Picker.Item
            enabled={option.enabled}
            label={option.label}
            value={option.value}
            key={index}
          />
        ))}
      </Picker>
    </View>
  );
}
