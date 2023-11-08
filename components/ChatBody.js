import { ScrollView, StyleSheet } from "react-native";
import { width } from "../helpers/getWidth";
import { useRef } from "react";

import Message from "./Message";

function ChatBody({ id, messages }) {
    const scrollRef = useRef(null);

    return (
        <ScrollView
            style={style.container}
            ref={scrollRef}
            onContentSizeChange={() =>
                scrollRef.current.scrollToEnd({ animated: true })
            }
            contentContainerStyle={{
                alignItems: "center",
                paddingVertical: 16,
                paddingHorizontal: 8,
            }}
        >
            {messages.map((message, i) => (
                <Message
                    key={i}
                    currID={id}
                    id={message.id}
                    type={message.type}
                    userName={message.userName}
                    message={message.message}
                />
            ))}
        </ScrollView>
    );
}

export default ChatBody;

const style = StyleSheet.create({
    container: {
        flex: 1,
        width,
    },
});
