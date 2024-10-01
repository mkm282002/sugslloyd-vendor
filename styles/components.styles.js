import { StyleSheet, Platform, StatusBar } from "react-native";
import { DANGER_COLOR, DARK, INFO_COLOR, LIGHT, PRIMARY_COLOR, PRIMARY_COLOR_TRANSPARENT, SCREEN_HEIGHT, SCREEN_WIDTH, SECONDARY_COLOR, SUCCESS_COLOR, WARNING_COLOR } from "./constant";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT,
    alignItems: 'center',
    marginHorizontal: 8
  },
  textLarge: {
    fontSize: 20,
  },
  imageContainer: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 0.1 * SCREEN_HEIGHT,
    marginVertical: 0.02 * SCREEN_HEIGHT
  },
  imageContainerImg: {
    width: 0.6 * SCREEN_WIDTH,
    height: 0.6 * SCREEN_WIDTH,
    marginTop: 20
  },
  inputContainer: {
    width: SCREEN_WIDTH - 16,
  },
  textInput: {
    marginVertical: 8
  },
  textInputField: {
    marginVertical: 4,
    backgroundColor: PRIMARY_COLOR_TRANSPARENT,
    borderRadius: 6,
    height: 54,
    fontSize: 18,
    paddingLeft: 14,
    borderColor: PRIMARY_COLOR,
    borderWidth: 1
  },
  primaryButton: {
    marginVertical: 8,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center'
  },
  btnText: {
    textTransform: "uppercase",
    fontWeight: 'bold'
  },
  rightLink: {
    color: PRIMARY_COLOR,
    textAlign: "right",
    textDecorationLine: 'underline',
    marginVertical: 12
  },
  headerStyle: {
    width: SCREEN_WIDTH,
    borderBottomColor: '#6c6c6c',
    borderBottomWidth: 0.5,
    height: 54,
    margin: 0,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  titleText: {
    fontWeight: '700',
    color: DARK
  },
  statCard: {
    width: SCREEN_WIDTH / 2.5,
    height: SCREEN_WIDTH / 3,
    margin: 8,
    padding: 18
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  picker: {
    borderWidth: 1,
    borderColor: SECONDARY_COLOR,
    borderRadius: 5,
  },
  chipButton: {
    borderWidth: 1,
    borderColor: SECONDARY_COLOR,
    borderRadius: 5,
    padding: 4,
    marginRight: 4,
    backgroundColor: LIGHT,
    width: SCREEN_WIDTH / 3.5
  },
  btn: {
    marginVertical: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 6,
    flexDirection: 'row',
  },
  bgInfo: {
    backgroundColor: INFO_COLOR
  },
  bgDanger: {
    backgroundColor: DANGER_COLOR
  },
  bgWarning: {
    backgroundColor: WARNING_COLOR
  },
  bgSuccess: {
    backgroundColor: SUCCESS_COLOR
  },
  bgPrimary: {
    backgroundColor: PRIMARY_COLOR
  },
  bgPrimaryTransParent: {
    backgroundColor: PRIMARY_COLOR_TRANSPARENT
  },
  bgSecondary: {
    backgroundColor: SECONDARY_COLOR
  },
  round: {
    height: 64,
    width: 64,
    borderRadius: 32,
    justifyContent: 'center'
  },
  textLight: {
    color: LIGHT
  },
  textDark: {
    color: DARK
  },
  textSecondary: {
    color: SECONDARY_COLOR
  },
  border: {
    borderWidth: 1
  },
  fab: {
    elevation: 2,
    position: 'absolute',
    bottom: 8,
    right: 8
  },
  bottom: {
    position: 'absolute',
    bottom: 2
  },
  fullWidth: {
    width: SCREEN_WIDTH,
  },

  messageContainer: {
    padding: 12,
    borderRadius: 16,
    marginVertical: 8,
  },
  sentMessage: {
    backgroundColor: PRIMARY_COLOR,
    alignSelf: "flex-end",
  },
  receivedMessage: {
    backgroundColor: SECONDARY_COLOR,
    alignSelf: 'flex-start'
  },
  messageText: {
    color: LIGHT,
    fontSize: 16,
  },
  sentMessageText: {
    color: LIGHT,
  },
  messageTime: {
    color: LIGHT,
    fontSize: 12,
    marginTop: 4,
  },
  progressBarContainer: {
    width: "90%",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 10,
  },
  itemContainer: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 8,
  },
})

