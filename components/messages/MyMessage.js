import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";

function MyMessage({ message, userName }) {
    return (
        <LinearGradient
            colors={["#8de9d5", "#32c4c0"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={style.container}
        >
            <Text style={style.username}>{userName.split(" ")[0]}</Text>
            <Text style={style.text}>{message}</Text>
        </LinearGradient>
    );
}

export default MyMessage;

const style = StyleSheet.create({
    container: {
        width: "auto",
        maxWidth: "80%",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 24,
        borderBottomRightRadius: 0,
        marginBottom: 8,
        marginLeft: "auto",
    },
    text: {
        color: "black",
        fontSize: 17,
    },
    username: {
        color: "black",
        fontSize: 11,
    },
});
