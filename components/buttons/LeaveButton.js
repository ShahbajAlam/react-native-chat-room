import { Pressable, StyleSheet, Image } from "react-native";

function LeaveButton({ onLeave }) {
    return (
        <Pressable onPress={onLeave}>
            <Image
                style={style.leaveBtn}
                source={require("../../assets/leave.png")}
            />
        </Pressable>
    );
}

export default LeaveButton;

const style = StyleSheet.create({
    leaveBtn: {
        width: 48,
        height: 48,
    },
});
