import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    Dimensions,
    ToastAndroid,
    BackHandler,
} from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

import JoinButton from "./buttons/JoinButton";

const width = Dimensions.get("window").width;

function JoinPage({ setUserName, setRoom }) {
    const [nameInput, setNameInput] = useState("");
    const [roomInput, setRoomInput] = useState("");

    function errorToast() {
        ToastAndroid.showWithGravityAndOffset(
            "Enter both name and room number",
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            0,
            100
        );
    }

    function reset() {
        setNameInput("");
        setRoomInput("");
    }

    function handleJoinRoom() {
        if (!nameInput || !roomInput) {
            errorToast();
            return;
        }
        setUserName(nameInput);
        setRoom(roomInput);
        reset();
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () =>
            BackHandler.exitApp()
        );
    }, []);

    return (
        <LinearGradient style={style.container} colors={["#d3cce3", "#e9e4f0"]}>
            <View style={style.headingContainer}>
                <Image
                    source={require("../assets/logo.png")}
                    alt="logo"
                    style={style.logo}
                />
                <Text style={style.heading}>Chat Room</Text>
            </View>
            <View style={StyleSheet.create({ width: "100%" })}>
                <TextInput
                    keyboardType="default"
                    placeholder="Enter your name ..."
                    style={style.input}
                    value={nameInput}
                    onChangeText={(e) => setNameInput(e)}
                />
                <TextInput
                    keyboardType="numeric"
                    placeholder="Enter room number ..."
                    style={style.input}
                    value={roomInput}
                    maxLength={5}
                    onChangeText={(e) => setRoomInput(e)}
                />
                <JoinButton onJoinRoom={handleJoinRoom} />
            </View>
        </LinearGradient>
    );
}

export default JoinPage;

const style = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        width: width * 0.8,
        minHeight: 290,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        padding: 20,
    },
    headingContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    logo: {
        width: 36,
        height: 36,
        marginRight: 8,
    },
    heading: {
        fontSize: 40,
        fontFamily: "sans-serif",
        fontWeight: "800",
        textAlign: "center",
    },
    input: {
        width: "100%",
        backgroundColor: "rgb(209,213,219)",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 20,
        marginBottom: 18,
        borderLeftColor: "rgb(34,197,94)",
        borderLeftWidth: 5,
    },
});
