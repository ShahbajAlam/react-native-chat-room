import { View, StyleSheet, Text, Image } from "react-native";
import LeaveButton from "./buttons/LeaveButton";
import { width } from "../helpers/getWidth";

function ChatHeader({ room, toggleModal }) {
    return (
        <View style={style.container}>
            <Image source={require("../assets/logo.png")} style={style.logo} />
            <Text style={style.text}>Room : {room}</Text>
            <LeaveButton onLeave={toggleModal} />
        </View>
    );
}

export default ChatHeader;

const style = StyleSheet.create({
    container: {
        width,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 36,
        paddingHorizontal: 16,
        paddingBottom: 16,
        backgroundColor: "#375a79",
        borderRadius: 0,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    logo: {
        width: 48,
        height: 48,
    },
    text: {
        fontSize: 24,
        color: "rgb(229, 231, 235)",
        textAlign: "center",
    },
});
