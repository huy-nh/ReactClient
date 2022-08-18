import EventBus from "./EventBus";
import React from "react";

class DialogContainer extends React.Component {
  state: IState = {
    dialogs: [],
  };

  componentDidMount() {
    EventBus.subscribe(this, "dialog.open", this.open);
    EventBus.subscribe(this, "dialog.close", this.close);
  }

  componentWillUnmount() {
    EventBus.unsubscribe(this);
  }

  open = (dialog: IDialog) => {
    this.setState((prevState: IState) => ({
      dialogs: [...prevState.dialogs, dialog],
    }));
  };

  close = (id: IDialog) => {
    this.setState((prevState: IState) => ({
      dialogs: prevState.dialogs.filter((x) => x.id !== id),
    }));
  };

  render() {
    const { dialogs } = this.state;

    return (
      <>
        {dialogs.map((dialog: IDialog) => {
          const DialogComponent = dialog.component;

          return <DialogComponent key={dialog.id} {...dialog.props} />;
        })}
      </>
    );
  }
}

interface IState {
  dialogs: Array<IDialog>;
}

interface IDialog {
  id: any;
  props: any;
  component: any;
}

export default DialogContainer;
