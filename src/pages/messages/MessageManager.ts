import EventBus from "pages/container/EventBus";
import { v4 as uniqueId } from "uuid";

export default class MessageManager {
  static show = (
    message: string,
    type: "info" | "success" | "error" = "info"
  ) => {
    EventBus.publish("messages.add", {
      message,
      type,
    });
  };
}
