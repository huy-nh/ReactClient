import EventBus from "./EventBus";
import { v4 as uniqueId } from "uuid";

export default class DialogManager {
  static show(component, props) {
    return new Promise((resolve) => {
      const id = uniqueId();
      const newProps = { ...(props || {}) };

      newProps.onDialogClose = (result) => {
        EventBus.publish("dialog.close", id);

        resolve(result);
      };

      EventBus.publish("dialog.open", {
        id,
        component,
        props: newProps,
      });
    });
  }

  // static showConfirm(title, content, onPrimary) {
  //   return new Promise((resolve) => {
  //     const id = uniqueId();
  //     const newProps = { ...(props || {}) };

  //     newProps.onDialogClose = (result: any) => {
  //       EventBus.publish("dialog.close", id);

  //       resolve(result);
  //     };

  //     EventBus.publish("dialog.open", {
  //       id,
  //       component,
  //       props: newProps,
  //     });
  //   });
  // }
}