import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";

function UserLeft({ message }) {
    return (
        <LinearGradient
            colors={["#f3696e", "#f8a902"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={style.container}
        >
            <Text style={style.text}>{message}</Text>
        </LinearGradient>
    );
}

export default UserLeft;

const style = StyleSheet.create({
    container: {
        width: "80%",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 24,
        marginBottom: 16,
    },
    text: {
        color: "black",
        fontSize: 17,
        textAlign: "center",
    },
});
