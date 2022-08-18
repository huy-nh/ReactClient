import EventBus from './EventBus';
import { v4 as uniqueId } from 'uuid';

// import MessageDialog from 'components/dialogs/MessageDialog';


export default class dialogManager {
  static show(component: any, props: any) {
    return new Promise((resolve) => {
      const id = uniqueId();
      const newProps = { ...(props || {}) };

      newProps.onDialogClose = (result: any) => {
        EventBus.publish('dialog.close', id);

        resolve(result);
      };

      EventBus.publish('dialog.open', {
        id,
        component,
        props: newProps,
      });
    });
  }

  // static async message(props: any) {
  //   const result = await dialogManager.show(MessageDialog, props);

  //   return result;
  // }
}
