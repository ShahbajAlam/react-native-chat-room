import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";

function TheirMessage({ message, userName }) {
    return (
        <LinearGradient
            colors={["#f4d941", "#ec8235"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={style.container}
        >
            <Text style={style.username}>{userName.split(" ")[0]}</Text>
            <Text style={style.text}>{message}</Text>
        </LinearGradient>
    );
}

export default TheirMessage;

const style = StyleSheet.create({
    container: {
        width: "auto",
        maxWidth: "80%",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 24,
        borderBottomLeftRadius: 0,
        marginBottom: 8,
        marginRight: "auto",
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
