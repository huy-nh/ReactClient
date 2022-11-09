import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, LinearProgress } from '@mui/material';

const CommonDialog = ({ title, loading, error, options, okAction, cancelAction, children, ...otherProps }: IProps) => {
  const { okLabel, hideOkButton, colorOKButton, cancelLabel, hideCancelButton } = options || {};

  return (
    <Dialog fullWidth maxWidth="sm" open {...otherProps}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {loading && <LinearProgress />}
      {error && !loading && (
        <Alert style={{ padding: '10px 24px' }} severity="error">
          {error}
        </Alert>
      )}
      <DialogContent style={{ padding: '20px 24px' }}>{children}</DialogContent>
      <DialogActions style={{ padding: '20px 24px' }}>
        {!hideCancelButton && <Button onClick={cancelAction} children={cancelLabel || 'Cancel'} variant="outlined" />}
        {!hideOkButton && (
          <Button
            variant="contained"
            color={colorOKButton || 'primary'}
            children={okLabel || 'OK'}
            onClick={okAction}
          />
        )}
      </DialogActions>
    </Dialog>
  );
};

interface IOptions {
  okLabel?: string;
  hideOkButton?: boolean;
  colorOKButton?: 'error' | 'success' | 'inherit' | 'primary' | 'secondary' | 'info' | 'warning' | undefined;
  cancelLabel?: string;
  hideCancelButton?: boolean;
}

interface IProps {
  classes?: any;
  title?: any;
  loading?: boolean;
  error?: any;
  children?: any;

  options?: IOptions;

  okAction?: () => any;
  cancelAction?: () => any;

  //onDialogClose?: any;
  [s: string]: any;
}

export default CommonDialog;
