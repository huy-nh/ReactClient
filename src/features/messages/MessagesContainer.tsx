import { Alert, Slide, Snackbar } from "@mui/material";

import EventBus from "features/container/EventBus";
import React from "react";
import { v4 as uniqueId } from "uuid";

class MessagesContainer extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    EventBus.subscribe(this, "messages.add", this.show);
  }

  componentWillUnmount() {
    EventBus.unsubscribe(this);
  }

  handleClose = (id?: string, reason?: any) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState((state) => ({
      messages: state.messages.filter((x: any) => x.id !== id),
    }));
  };

  show = ({ message, type }: any) => {
    const newMessage = { message, type, open: true, id: uniqueId() };

    this.setState((state) => ({ messages: [...state.messages, newMessage] }));
  };

  render() {
    const { messages } = this.state;

    return (
      <>
        {messages &&
          messages.length > 0 &&
          messages.map((message: any, index: any) => (
            <Snackbar
              open
              key={message.id}
              autoHideDuration={3000}
              style={{ width: 300, marginTop: index * 60 + 48 }}
              onClose={(_, reason) => this.handleClose(message.id, reason)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              TransitionComponent={Slide}
            >
              <Alert
                variant="filled"
                severity={message.type}
                onClose={() => this.handleClose(message.id)}
                style={{ width: 300 }}
                icon={false}
              >
                {message.message}
              </Alert>
            </Snackbar>
          ))}
      </>
    );
  }
}

interface IProps {}

interface IState {
  messages: any;
}

export default MessagesContainer;
