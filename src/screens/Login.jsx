import React from 'react';
import {useRef} from 'react';
import {Controller, useForm} from 'react-hook-form';
import AuthButton from '../components/auth/AuthButton';
import AuthLayOut from '../components/auth/AuthLayOut';
import {TextInput} from '../components/auth/AuthShared';

export default function Login() {
  const {control, handleSubmit, formState} = useForm();

  const passwordRef = useRef();
  const onNext = nextOn => {
    nextOn?.current?.focus();
  };
  const onValid = data => {
    console.log(data);
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
        disabled={true}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayOut>
  );
}
