import { useState } from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import ContainerComponent from "../components/ContainerComponent";
import MyFlatList from "../components/utility/MyFlatList";
import { H2, H3, H4, H5, P } from "../components/text";
import CardFullWidth from "../components/card/CardFullWidth";
import StatCard from "../components/card/Statcard";

import {
  layouts,
  LIGHT,
  PRIMARY_COLOR,
  SCREEN_WIDTH,
  spacing,
  styles,
  typography,
} from "../styles";
import { staff, tasks } from "../utils/faker"; //TODO: This will come from reducer store

export default function DashboardScreen() {
  const navigation = useNavigation();
  const today = useState(moment().format("DD MMM YYYY"));

  const navigateToTaskList = () => {
    navigation.navigate("taskList");
  };

  const navigateToTaskCardScreen = () => {
    navigation.navigate("TaskCardScreen"); // Ensure this screen is registered in your navigation stack
  };

  const navigateToToDoTaskCardScreen = () => {
    navigation.navigate("ToDoTaskCardScreen"); // Ensure this screen is registered in your navigation stack
  };

  return (
    <ContainerComponent>
      <View
        style={[
          styles.row,
          spacing.mh2,
          { alignItems: "center", width: SCREEN_WIDTH - 16 },
        ]}
      >
        <View>
          <H3 style={typography.textBold}>Good Morning, {staff.first_name}</H3>
          <P style={spacing.ml1}>{today}</P>
        </View>
        <Image
          source={{ uri: staff.image }}
          style={[layouts.circle12, spacing.mv3, layouts.center]}
        />
      </View>
      {/* Welcome message */}
      <ScrollView>
        <View style={[spacing.mt2, { width: SCREEN_WIDTH - 18 }]}>
          <CardFullWidth backgroundColor={LIGHT}>
            <View style={[styles.row, { alignItems: "center" }]}>
              <Icon name="alarm" size={64} color={PRIMARY_COLOR} />
              <TouchableOpacity style={layouts.center}>
                <Icon name="log-out-outline" size={32} color={PRIMARY_COLOR} />
                <H4>Clock Out</H4>
              </TouchableOpacity>
            </View>
            <H5>Clock started at: {moment().format("HH:mm:ss A")}</H5>
          </CardFullWidth>
        </View>

        <View style={[spacing.mt2, { width: SCREEN_WIDTH - 18 }]}>
          <CardFullWidth backgroundColor={LIGHT}>
            <View style={[styles.row, { alignItems: "center" }]}>
              <Icon name="document-text" size={64} color={PRIMARY_COLOR} />
              <TouchableOpacity style={layouts.center}>
                <H2>0</H2>
                <H5>My Open Tasks</H5>
              </TouchableOpacity>
            </View>
          </CardFullWidth>
        </View>
        <View style={[spacing.mt2, { width: SCREEN_WIDTH - 18 }]}>
          <CardFullWidth backgroundColor={LIGHT}>
            <View style={[styles.row, spacing.mr5, { alignItems: "center" }]}>
              <Icon name="calendar-clear" size={34} color={PRIMARY_COLOR} />
              <H5 style={[typography.textBold, { marginRight: 130 }]}>
                Project Overview
              </H5>
            </View>
            <View style={[spacing.bbw05, spacing.mv1]} />
            <View
              style={[
                styles.row,
                { justifyContent: "space-between", paddingVertical: 10 },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <P style={typography.textBold}>Open</P>
                <P>0</P>
              </View>
              <View style={{ alignItems: "center" }}>
                <P style={typography.textBold}>Completed</P>
                <P>0</P>
              </View>
              <View style={{ alignItems: "center" }}>
                <P style={typography.textBold}>Hold</P>
                <P>0</P>
              </View>
            </View>
            <TouchableOpacity style={layouts.center}></TouchableOpacity>
          </CardFullWidth>
        </View>
        <View style={[spacing.mt2, { width: SCREEN_WIDTH - 18 }]}>
          <CardFullWidth backgroundColor={LIGHT}>
            <View style={[styles.row, spacing.mr5, { alignItems: "center" }]}>
              <Icon name="filter" size={34} color={PRIMARY_COLOR} />
              <H5 style={[typography.textBold, { marginRight: 130 }]}>
                All Task Overview
              </H5>
            </View>
            <View style={[spacing.bbw05, spacing.mv1]} />
            <View
              style={[
                styles.row,
                { justifyContent: "space-between", paddingVertical: 10 },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity onPress={navigateToToDoTaskCardScreen}>
                  <P style={typography.textBold}>To Do</P>
                  <P style={spacing.ml2}>2</P>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center", marginRight: 140 }}>
                <TouchableOpacity onPress={navigateToTaskCardScreen}>
                  <P style={typography.textBold}>Done</P>
                  <P style={spacing.ml2}>3</P>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={layouts.center}></TouchableOpacity>
          </CardFullWidth>
        </View>

        <View style={[spacing.mt2, { width: SCREEN_WIDTH - 18 }]}>
          <CardFullWidth backgroundColor={LIGHT}>
            <View style={[styles.row, spacing.mr5, { alignItems: "center" }]}>
              <Icon name="document-text" size={34} color={PRIMARY_COLOR} />
              <H5 style={[typography.textBold, { marginRight: 150 }]}>
                My timeSheet
              </H5>
            </View>
            <View style={[spacing.bbw05, spacing.mv1]} />
            <View
              style={[
                styles.row,
                { justifyContent: "space-between", paddingVertical: 10 },
              ]}
            ></View>
            <TouchableOpacity style={layouts.center}></TouchableOpacity>
          </CardFullWidth>
        </View>
      </ScrollView>

      {/* Attendance Data */}
      <MyFlatList
        data={tasks}
        renderItem={({ item }) => (
          <StatCard
            key={item.id}
            backgroundColor={item.backgroundColor}
            tasks={item.count}
            status={item.status}
            onPress={item.id === 1 ? navigateToTaskList : null}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={() => (
          <H3 style={[typography.textBold, spacing.m2]}>My Projects</H3>
        )}
      />
    </ContainerComponent>
  );
}
