import React, {useRef} from 'react';
import AuthLayOut from '../components/auth/AuthLayOut';
import AuthButton from '../components/auth/AuthButton';
import {TextInput} from '../components/auth/AuthShared';
import {Controller, useForm} from 'react-hook-form';
import {gql, useMutation} from '@apollo/client';

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $name: String
    $password: String!
  ) {
    createAccount(
      username: $username
      email: $email
      name: $name
      password: $password
    ) {
      ok
      error
    }
  }
`;

export default function CreateAccount({navigation}) {
  const onCompleted = data => {
    const {
      createAccount: {ok},
    } = data;

    const {username, password} = getValues();

    if (ok) {
      navigation.navigate('Login', {
        username,
        password,
      });
    }
  };

  const [createAccountMutation, {loading}] = useMutation(
    CREATE_ACCOUNT_MUTATION,
    {
      onCompleted,
    },
  );

  const {control, handleSubmit, getValues, watch} = useForm();
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

  const onNext = nextOn => {
    nextOn?.current?.focus();
  };

  const onValid = data => {
    if (!loading) {
      createAccountMutation({
        variables: {
          ...data,
        },
      });
    }
  };

  return (
    <AuthLayOut>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name="username"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="username"
            returnKeyType="next"
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            onSubmitEditing={() => onNext(emailRef)}
          />
        )}
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name="email"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            ref={emailRef}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="email"
            returnKeyType="next"
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            onSubmitEditing={() => onNext(nameRef)}
          />
        )}
      />
      <Controller
        control={control}
        name="name"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            ref={nameRef}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="name"
            returnKeyType="next"
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            onSubmitEditing={() => onNext(passwordRef)}
          />
        )}
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name="password"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            ref={passwordRef}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="password"
            returnKeyType="done"
            secureTextEntry
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
          />
        )}
      />
      <AuthButton
        text="Create Account"
        loading={loading}
        disabled={!watch('username') || !watch('password')}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayOut>
  );
}
