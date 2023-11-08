import {
    View,
    StyleSheet,
    Image,
    TextInput,
    Pressable,
    Keyboard,
} from "react-native";
import { width } from "../helpers/getWidth";

function ChatInput({ inputMessage, setInputMessage, sendMessage }) {
    return (
        <View style={style.container}>
            <TextInput
                placeholder="Start typing ..."
                placeholderTextColor="rgb(107,114,128)"
                selectionColor="rgb(107,114,128)"
                style={style.input}
                value={inputMessage}
                onChangeText={(e) => setInputMessage(e)}
            />
            <Pressable
                style={style.sendBtn}
                onPress={() => {
                    sendMessage(inputMessage);
                    Keyboard.dismiss();
                }}
            >
                <Image
                    source={require("../assets/send.png")}
                    style={style.sendBtn}
                />
            </Pressable>
        </View>
    );
}

export default ChatInput;

const style = StyleSheet.create({
    container: {
        width,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: "#223749",
        borderRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    input: {
        width: "82%",
        borderRadius: 24,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "rgb(107,114,128)",
        paddingHorizontal: 16,
        paddingVertical: 7,
        color: "rgb(229, 231, 235)",
        fontSize: 17,
    },
    sendBtn: {
        width: 48,
        height: 48,
    },
});
