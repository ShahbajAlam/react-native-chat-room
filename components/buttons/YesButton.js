import { StyleSheet, Pressable, Text } from "react-native";

function YesButton({ onAgree }) {
    return (
        <Pressable style={style.btn} onPress={onAgree}>
            <Text style={style.btnText}>YES</Text>
        </Pressable>
    );
}

export default YesButton;

const style = StyleSheet.create({
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "green",
        borderRadius: 8,
    },
    btnText: {
        fontSize: 20,
        color: "white",
    },
});
