import MessageReceiver from '../../containers/message-receiver/message-receiver';
import MessageSender from '../../containers/message-sender/message-sender';
import { MessageSocketProvider } from '../../websocket/message-websocket';

const LiveMessageApp = () => {

    // Utilisation du "Provider" customiser pour interagir avec SocketIO 

    return (<>
        <MessageSocketProvider>
            <MessageSender />
            <MessageReceiver />
        </MessageSocketProvider>
    </>);
};

export default LiveMessageApp;