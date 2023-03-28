import React, {useRef} from 'react';
import AuthLayOut from '../components/auth/AuthLayOut';
import AuthButton from '../components/auth/AuthButton';
import {TextInput} from '../components/auth/AuthShared';
import {Controller, useForm} from 'react-hook-form';

export default function CreateAccount() {
  const {control, handleSubmit} = useForm();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = nextOn => {
    nextOn?.current?.focus();
  };

  const onDone = () => {
    alert('Done!');
  };

  return (
    <AuthLayOut>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name="firstName"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="firstName"
            returnKeyType="next"
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            onSubmitEditing={() => onNext(lastNameRef)}
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            ref={lastNameRef}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="lastName"
            returnKeyType="next"
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            onSubmitEditing={() => onNext(usernameRef)}
          />
        )}
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name="username"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            ref={usernameRef}
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
            returnKeyType="next"
            secureTextEntry
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
          />
        )}
      />
      <AuthButton text="Create Account" loading onPress={() => null} />
    </AuthLayOut>
  );
}
