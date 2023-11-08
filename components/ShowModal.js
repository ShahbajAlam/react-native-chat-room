import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { LinearGradient } from "expo-linear-gradient";

import YesButton from "./buttons/YesButton";
import NoButton from "./buttons/NoButton";

function ShowModal({
    id,
    socket,
    isModalOpen,
    setIsModalOpen,
    room,
    setRoom,
    setUserName,
}) {
    const toggleModal = () => {
        setIsModalOpen((e) => !e);
    };

    const userLeft = () => {
        socket.emit("disconnected", { id, room });
        setRoom("");
        setUserName("");
    };

    return (
        <Modal
            isVisible={isModalOpen}
            animationIn="fadeInDown"
            animationInTiming={500}
            hasBackdrop={true}
            onBackdropPress={toggleModal}
            style={style.modal}
            statusBarTranslucent
            backdropOpacity={0.8}
            onBackButtonPress={toggleModal}
        >
            <LinearGradient
                style={{ borderRadius: 18 }}
                colors={["#D3CCE3", "#E9E4F0"]}
            >
                <View style={style.container}>
                    <Text style={style.text}>
                        Do you want to leave the room?
                    </Text>
                    <View style={style.btnContainer}>
                        <YesButton onAgree={userLeft} />
                        <NoButton onDecline={toggleModal} />
                    </View>
                </View>
            </LinearGradient>
        </Modal>
    );
}

export default ShowModal;

const style = StyleSheet.create({
    modal: {
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "80%",
        minHeight: 220,
        padding: 16,
        justifyContent: "space-around",
    },
    text: {
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});
