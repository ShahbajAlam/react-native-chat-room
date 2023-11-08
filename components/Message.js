import Welcome from "./messages/Welcome";
import UserJoined from "./messages/UserJoined";
import UserLeft from "./messages/UserLeft";
import MyMessage from "./messages/MyMessage";
import TheirMessage from "./messages/TheirMessage";

function Message({ id, type, message, userName, currID }) {
    if (type === "welcome") return <Welcome message={message} />;
    if (type === "left") return <UserLeft message={message} />;
    if (type === "joined") return <UserJoined message={message} />;
    if (currID === id)
        return <MyMessage message={message} userName={userName} />;
    return <TheirMessage message={message} userName={userName} />;
}

export default Message;
