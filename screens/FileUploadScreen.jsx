import { useState, useRef, useEffect } from "react";
import { View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";
import { Card } from "react-native-paper";
import CameraComponent from "../components/CameraComponent";
import ContainerComponent from "../components/ContainerComponent";
import { H2, H4, H6, P } from "../components/text";
import Button from "../components/buttons/Button";
import MyTextInput from "../components/input/MyTextInput";
import MyHeader from '../components/header/MyHeader'
import { SCREEN_WIDTH, typography, spacing, styles, layouts } from "../styles";
import { inventory } from "../utils/faker";
import MyPickerInput from "../components/input/MyPickerInput";
<<<<<<< HEAD
=======
import { useTranslation } from "react-i18next";
>>>>>>> a85e4be1654a673a6c01d9c3c97de764acfbdfdc

export default function FileUploadScreen() {
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [materials, setMaterials] = useState([])

  const cameraRef = useRef(null);


  const handleTakePicture = async () => {
    if (cameraRef.current && photos.length < 5) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotos([...photos, photo.uri]);
    }
  };

  const handleUpload = () => {
    if (photos.length > 0) {
      console.log("Done")
    }
  };

  const handleCancel = () => {
    setPhotos([]);
    setDescription("");
  };

  const removePhoto = (uri) => {
    setPhotos(photos.filter((photoUri) => photoUri !== uri));
  };
  useEffect(() => {
    let myArr = []
    inventory.map((item, index) => {
      const myObj = { enabled: true, label: item.product_name, value: item.id }
      myArr.push(myObj)
    })
    setMaterials(myArr)
  }, [])


  useEffect(() => {
    let myArr = []
    inventory.map((item, index) => {
      const myObj = { enabled: true, label: item.product_name, value: item.id }
      myArr.push(myObj)
    })
    setMaterials(myArr)
  }, [])
  const { t } = useTranslation();

  return (
    <ContainerComponent>
<<<<<<< HEAD
      <MyHeader title="Submit Task" isBack={true} hasIcon={true} />
      <ScrollView style={[layouts.flex1]} showsVerticalScrollIndicator={false}>
        <Card style={[spacing.mv2, spacing.p2]}>
          <H4 style={[styles.titleText, spacing.m2, { marginVertical: 0 }]}>Upload Photos</H4>
          <P style={[spacing.mh2]}>Take upto 5 photos</P>
          <CameraComponent cameraRef={cameraRef} />

          <Button style={[styles.btn, styles.bgPrimary, layouts.center]} onPress={handleTakePicture}>
            <H2 style={[styles.btnText, styles.textLarge, typography.textLight]}>Take Photo</H2>
          </Button>

          <View style={[styles.row, { justifyContent: 'flex-start' }]}>
            {photos.map((photoUri, index) => (
              <View key={index} style={[spacing.mr2, spacing.mt2, { position: 'relative' }]}>
                <Image source={{ uri: photoUri }} style={[styles.image, spacing.br1]} />
                <TouchableOpacity
                  style={[layouts.circle625, layouts.center, styles.bgDanger, styles.removeImageButton]}
=======
      <MyHeader title={t("submit_task")} isBack={true} hasIcon={true} />
      <ScrollView style={[layouts.flex1]} showsVerticalScrollIndicator={false}>
        <Card style={[spacing.mv2, spacing.p2]}>
          <H4 style={[styles.titleText, spacing.m2, { marginVertical: 0 }]}>
            {t("upload_photo")}
          </H4>
          <P style={[spacing.mh2]}>{t("photo_description")}</P>
          <CameraComponent cameraRef={cameraRef} />

          <Button
            style={[styles.btn, styles.bgPrimary, layouts.center]}
            onPress={handleTakePicture}
          >
            <H2
              style={[styles.btnText, typography.font20, typography.textLight]}
            >
              {t("take_photo")}
            </H2>
          </Button>

          <View style={[styles.row, { justifyContent: "flex-start" }]}>
            {photos.map((photoUri, index) => (
              <View
                key={index}
                style={[spacing.mr2, spacing.mt2, { position: "relative" }]}
              >
                <Image
                  source={{ uri: photoUri }}
                  style={[styles.image, spacing.br1]}
                />
                <TouchableOpacity
                  style={[
                    layouts.circle625,
                    layouts.center,
                    styles.bgDanger,
                    styles.removeImageButton,
                  ]}
>>>>>>> a85e4be1654a673a6c01d9c3c97de764acfbdfdc
                  onPress={() => removePhoto(photoUri)}
                >
                  <P style={{ fontSize: 14, color: "white", marginLeft: 2 }}>
                    X
                  </P>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </Card>

<<<<<<< HEAD
        <MyPickerInput title="Select Material" options={materials} />

        <MyTextInput
          title="Description"
          height={220}
          onChangeText={(text) => setDescription(text)}
          type="text"
          placeholder="Briefly describe in less than 80 words"
=======
        <MyPickerInput title={t("select_material")} options={materials} />

        <MyTextInput
          title={t("description")}
          height={220}
          onChangeText={(text) => setDescription(text)}
          type="text"
          placeholder={t("description_title")}
>>>>>>> a85e4be1654a673a6c01d9c3c97de764acfbdfdc
          multiline
          numberOfLines={4}
          value={description}
        />

<<<<<<< HEAD
        <View
          style={[styles.row, { justifyContent: "space-between" }]}
        >
          <Button onPress={handleCancel} style={[styles.btn, styles.bgLight, spacing.bw05, layouts.center, { width: SCREEN_WIDTH / 2 - 20 }]}>
            <H2 style={[styles.btnText, styles.textLarge, typography.textDark]}>Cancel</H2>
          </Button>
          <Button
            onPress={handleUpload}
            style={[styles.btn, styles.bgPrimary, layouts.center, { width: SCREEN_WIDTH / 2 - 20 }]}
          >
            <H2 style={[styles.btnText, styles.textLarge, typography.textLight]}>Submit</H2>
=======
        <View style={[styles.row, { justifyContent: "space-between" }]}>
          <Button
            onPress={handleCancel}
            style={[
              styles.btn,
              styles.bgLight,
              spacing.bw05,
              layouts.center,
              { width: SCREEN_WIDTH / 2 - 20 },
            ]}
          >
            <H2 style={[styles.btnText, typography.font20, typography.textDark]}>
              Cancel
            </H2>
          </Button>
          <Button
            onPress={handleUpload}
            style={[
              styles.btn,
              styles.bgPrimary,
              layouts.center,
              { width: SCREEN_WIDTH / 2 - 20 },
            ]}
          >
            <H2
              style={[styles.btnText, typography.font20, typography.textLight]}
            >
              Submit
            </H2>
>>>>>>> a85e4be1654a673a6c01d9c3c97de764acfbdfdc
          </Button>
        </View>
      </ScrollView>
    </ContainerComponent>
  );
};