import { StyleSheet } from "react-native";
const planYpink = "#ff005de6";

export default StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  viewContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    // padding: 24,
    margin: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 60,
    marginBottom: 10,
  },
  mainTitle: {
    fontSize: 30,
  },
  subTitle: {
    fontSize: 25,
    paddingBottom: 20,
    paddingTop: 10,
  },
  error: {
    marginTop: 10,
    color: "red",
  },
  text: {
    fontSize: 21,
  },
  howItWorksText: {
    fontSize: 21,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  smallText: {
    fontSize: 18,
  },
  fullName: {
    fontSize: 20,
    paddingTop: 10,
  },
  paragraph: {
    fontSize: 17,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  textHeader: {
    textAlign: "left",
    marginBottom: 15,
    fontWeight: "600",
    marginLeft: 20,
  },
  textInput: {
    padding: 5,
    borderWidth: 0.5,
    margin: 20,
  },
  pinkText: {
    color: planYpink,
    fontSize: 16,
  },
  uploadButton: {
    borderColor: "black",
    borderRadius: 2,
    borderWidth: 0.8,
    width: 250,
    marginLeft: 20,
    alignItems: "center",
  },
  clickHereButton: {
    color: planYpink,
    marginLeft: 20,
    marginTop: 5,
  },
  needHelpText: {
    marginLeft: 20,
  },
  image: {
    width: 320,
    height: 320,
    alignSelf: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    // width: 9000,
    height: 40,
    margin: 12,
    padding: 10,
  },
  containerInput: {
    marginTop: 10,
    width: 300,
  },
  textSign: {
    marginTop: 5,
    fontSize: 17,
  },
  textButton: {
    color: planYpink,
    marginTop: 30,
    textDecorationLine: "underline",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});
