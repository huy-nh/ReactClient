import EventBus from "features/container/EventBus";
export default class MessageManager {
  static show = (
    message: string,
    type: "info" | "success" | "error" | "success" = "info"
  ) => {
    EventBus.publish("messages.add", {
      message,
      type,
    });
  };
}
