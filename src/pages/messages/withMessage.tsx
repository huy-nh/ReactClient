import EventBus from "pages/container/EventBus";
import React from "react";

type SetDifference<A, B> = A extends B ? never : A;
type SetComplement<A, A1 extends A> = SetDifference<A, A1>;
type Subtract<T extends T1, T1 extends object> = Pick<
  T,
  SetComplement<keyof T, keyof T1>
>;

export type WithMessageProps = {
  showError: (message: string) => void;
  showSuccess: (message: string) => void;
  showInfo: (message: string) => void;
};

export const withMessage = <P extends WithMessageProps>(
  Component: React.ComponentType<P>
): React.FunctionComponent<Subtract<P, WithMessageProps>> => {
  const ComponentWithMessage: React.FunctionComponent<
    Subtract<P, WithMessageProps>
  > = (props) => {
    const showInfo = (message: string) =>
      EventBus.publish("messages.add", {
        message: message,
        type: "info",
      });

    const showError = (message: string) =>
      EventBus.publish("messages.add", {
        message: message,
        type: "error",
      });

    const showSuccess = (message: string) =>
      EventBus.publish("messages.add", {
        message: message,
        type: "success",
      });

    return (
      <Component
        {...(props as P)}
        showError={showError}
        showSuccess={showSuccess}
        showInfo={showInfo}
      />
    );
  };

  const componentName = Component.displayName || Component.name || "Component";

  ComponentWithMessage.displayName = `withMessage(${componentName})`;

  return ComponentWithMessage;
};
