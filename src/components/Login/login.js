import React from 'react';

import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './loginElements';

const LogIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action='#'>
              <FormH1>LOG IN WITH ECAMPUS:</FormH1>
              <FormLabel htmlFor='for'>USER:</FormLabel>
              <FormInput type='user' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default LogIn;
