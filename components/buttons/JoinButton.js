import { Pressable, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function JoinButton({ onJoinRoom }) {
    return (
        <Pressable onPress={onJoinRoom}>
            <LinearGradient
                style={style.btn}
                colors={["rgb(22, 163,84)", "#166534"]}
            >
                <Text style={style.btnText}>Join Room</Text>
            </LinearGradient>
        </Pressable>
    );
}

export default JoinButton;

const style = StyleSheet.create({
    btn: {
        width: "100%",
        borderRadius: 8,
    },
    btnText: {
        textAlign: "center",
        color: "rgb(249,250,251)",
        fontSize: 20,
        paddingVertical: 8,
        fontWeight: "700",
    },
});
