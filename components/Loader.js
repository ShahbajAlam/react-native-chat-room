import { View, Text, StyleSheet } from "react-native";
import { width } from "../helpers/getWidth";
import { height } from "../helpers/getHeight";
import { useEffect, useState } from "react";

function Loader() {
    const [text, setText] = useState("");

    useEffect(() => {
        const id = setInterval(() => {
            setText((text) => {
                if (text.length === 3) return "";
                else return text + ".";
            });
        }, 300);

        return () => clearInterval(id);
    }, [text]);

    return (
        <View style={style.loader}>
            <Text style={style.text}>Please wait {text}</Text>
        </View>
    );
}

export default Loader;

const style = StyleSheet.create({
    loader: {
        width,
        height,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 2,
    },
    text: {
        width,
        textAlign: "center",
        fontSize: 28,
        color: "#fff",
    },
});
