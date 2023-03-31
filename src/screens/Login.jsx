import {gql, useMutation} from '@apollo/client';
import React from 'react';
import {useRef} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {isLoggedInVar, logUserIn} from '../../apollo';
import AuthButton from '../components/auth/AuthButton';
import AuthLayOut from '../components/auth/AuthLayOut';
import {TextInput} from '../components/auth/AuthShared';

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

export default function Login({route: {params}}) {
  const {control, handleSubmit, watch} = useForm({
    defaultValues: {
      username: params?.username,
      password: params?.password,
    },
  });

  const passwordRef = useRef();

  const onCompleted = async data => {
    const {
      login: {ok, token},
    } = data;

    if (ok) {
      await logUserIn(token);
    }
  };

  const [logInMutation, {loading}] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });

  const onNext = nextOn => {
    nextOn?.current?.focus();
  };

  const onValid = data => {
    if (!loading) {
      logInMutation({
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
            placeholder="password"
            ref={passwordRef}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            secureTextEntry
            returnKeyType="Done"
            lastOne={true}
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
          />
        )}
      />
      <AuthButton
        text="Log in"
        loading={loading}
        disabled={!watch('username') || !watch('password')}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayOut>
  );
}
