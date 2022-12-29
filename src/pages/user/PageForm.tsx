import { Box, Container } from "@mui/system";
import { Button, FormLabel as MUIFormLabel, Stack, TextField } from "@mui/material";
import { FormContext, FormProvinder } from "features/form/FormContext";
import { useContext, useState } from "react";

import GridLayout from "pages/shared/components/layout/GridLayout";
import PageHeader from "features/layouts/PageHerder";
import StringHelper from "features/common/StringHelper";

const PageForm = () => {
  const [count, setCount] = useState(0);
  const onChange = (e: any) => { console.log('render'); setCount(100); }
  return (
    <Container>
      <FormProvinder>
        <PageHeader title="Form" />
        <GridLayout xs={[3, 9]} md={[3, 9]} spacing={2} alignItems="center">
          <FormLabel title='username' required />
          <FormText name='username' />

          <FormLabel title='password' required />
          <FormText name='password' />

          <></>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" children='Login' />
            <Button variant="outlined" children='Sign-up' color="error" />

            <Button variant="outlined" children={count} color="secondary" onChange={onChange} />
          </Stack>
        </GridLayout>
      </FormProvinder>
    </Container>
  );
}

export default PageForm;

const FormLabel = ({ title, required }: any) => (
  <MUIFormLabel style={{ textTransform: 'capitalize', width: '100%' }}>
    {StringHelper.toTitleString(title)}
    {required && <Box component="span" sx={{ display: 'inline', color: 'red' }} children="&nbsp;*" />}
  </MUIFormLabel>
);

const FormText = ({ name }: any) => {
  const { model, validation, onChangeModel } = useContext(FormContext)
  return (
    <TextField
      fullWidth
      id={name}
      name={name}
      variant="outlined"
      onChange={onChangeModel}
      value={model[name]}
      error={!!validation[name]}
      helperText={validation[name]}
      inputProps={{ style: { padding: '10px' } }}
      style={{ width: '100%' }}
    />
  );
}