import { StyleSheet, KeyboardAvoidingView, BackHandler } from "react-native";
import { width } from "../helpers/getWidth";
import React, { useState, useEffect } from "react";
import socketIO from "socket.io-client";

import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";
import ShowModal from "./ShowModal";
import Loader from "./Loader";
import { nameFormatter } from "../helpers/nameFormatter";

const ENDPOINT = "https://chat-app-socket-wbqs.onrender.com";

function ChatPage(props) {
    const [id, setId] = useState("");
    const [inputMessage, setInputMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    const { userName: uName, room, setRoom, setUserName } = props;
    const userName = nameFormatter(uName);

    const socket = socketIO(ENDPOINT, {
        transports: ["websocket"],
    });

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            setIsModalOpen(true);
            return true;
        });
    }, []);

    const toggleModal = () => {
        setIsModalOpen((e) => !e);
    };

    const sendMessage = (msg) => {
        if (msg.trim().length === 0) return;
        socket.emit("message", { id, room, message: msg });
        setInputMessage("");
    };

    useEffect(() => {
        if (messages.length > 0) setShowLoader(false);
    }, [messages]);

    useEffect(() => {
        socket.on("getId", ({ id }) => setId(id));

        socket.emit("joinRoom", { room, userName });

        socket.emit("joined", { userName, room });

        socket.on("welcomeMessage", ({ id, userName, message, type }) =>
            setMessages((i) => [...i, { id, type, userName, message }])
        );

        socket.on("userJoined", ({ id, type, userName, message }) =>
            setMessages((i) => [...i, { id, type, userName, message }])
        );

        socket.on("userLeft", ({ id, type, userName, message }) => {
            setMessages((i) => [...i, { id, type, userName, message }]);
        });

        return () => socket.off();
    }, []);

    useEffect(() => {
        socket.on("receiveMessage", ({ id, type, message, userName }) =>
            setMessages((i) => [...i, { id, type, userName, message }])
        );

        return () => socket.off();
    }, []);

    if (showLoader) return <Loader />;

    return (
        <KeyboardAvoidingView style={style.container}>
            <ChatHeader room={room} toggleModal={toggleModal} />
            {isModalOpen && (
                <ShowModal
                    id={id}
                    room={room}
                    socket={socket}
                    setRoom={setRoom}
                    isModalOpen={isModalOpen}
                    setUserName={setUserName}
                    setIsModalOpen={setIsModalOpen}
                />
            )}
            <ChatBody id={id} messages={messages} />
            <ChatInput
                inputMessage={inputMessage}
                setInputMessage={setInputMessage}
                sendMessage={sendMessage}
            />
        </KeyboardAvoidingView>
    );
}

export default ChatPage;

const style = StyleSheet.create({
    container: {
        width,
        margin: 0,
        padding: 0,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
