import { StyleSheet, Pressable, Text } from "react-native";

function NoButton({ onDecline }) {
    return (
        <Pressable style={style.btn} onPress={onDecline}>
            <Text style={style.btnText}>NO</Text>
        </Pressable>
    );
}

export default NoButton;

const style = StyleSheet.create({
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#900603",
        borderRadius: 8,
    },
    btnText: {
        fontSize: 20,
        color: "white",
    },
});
