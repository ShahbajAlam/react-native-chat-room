import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";

function UserJoined({ message }) {
    return (
        <LinearGradient
            colors={["#82f4b1", "#30c67c"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={style.container}
        >
            <Text style={style.text}>{message}</Text>
        </LinearGradient>
    );
}

export default UserJoined;

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
