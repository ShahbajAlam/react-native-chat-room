import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import JoinPage from "./components/JoinPage";
import ChatPage from "./components/ChatPage";

export default function App() {
    const [userName, setUserName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <LinearGradient
            colors={["#4b79a1", "#283e51"]}
            style={style.appContainer}
        >
            <View>
                <StatusBar style="light" />
                {!room && !userName && (
                    <JoinPage setUserName={setUserName} setRoom={setRoom} />
                )}
                {room && userName && (
                    <ChatPage
                        room={room}
                        setRoom={setRoom}
                        userName={userName}
                        setUserName={setUserName}
                    />
                )}
            </View>
        </LinearGradient>
    );
}

const style = StyleSheet.create({
    appContainer: {
        margin: 0,
        padding: 0,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
