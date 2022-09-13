import { EventEmitter } from "fbemitter";

class EventBus {
  emitter = new EventEmitter();

  subscibers: Array<any> = [];

  subscribeToEvent(eventName: any, callback: any) {
    return this.emitter.addListener(eventName, callback);
  }

  unsubscribeWithToken(token: any) {
    if (token) {
      token.remove();
    }
  }

  subscribe(component: any, eventName: any, callback: any) {
    const token = this.emitter.addListener(eventName, callback);

    this.subscibers.push({
      component,
      token,
    });

    this.publish("eventbus.addedListener", {
      listeners: this.emitter.listeners.length,
    });
  }

  unsubscribe(component: any) {
    const listeners = this.subscibers.filter((x) => x.component === component);

    this.subscibers = this.subscibers.filter((x) => x.component !== component);

    listeners.forEach((x: any) => x.token.remove());
  }

  publish(eventName: any, message: any) {
    this.emitter.emit(eventName, message);
  }
}

const eventBus = new EventBus();

export default eventBus;
