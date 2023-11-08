import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";

function Welcome({ message }) {
    return (
        <LinearGradient
            colors={["#d397fa", "#b84fce"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={style.container}
        >
            <Text style={style.text}>{message}</Text>
        </LinearGradient>
    );
}

export default Welcome;

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
