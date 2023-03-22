import React, {useRef} from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import AuthLayOut from '../components/auth/AuthLayOut';
import AuthButton from '../components/auth/AuthButton';

export default function CreateAccount() {
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
      <TextInput
        placeholder="First Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{backgroundColor: 'white', width: '100%'}}
        onSubmitEditing={() => onNext(lastNameRef)}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{backgroundColor: 'white', width: '100%'}}
        onSubmitEditing={() => onNext(usernameRef)}
      />
      <TextInput
        ref={usernameRef}
        placeholder="Username"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{backgroundColor: 'white', width: '100%'}}
        onSubmitEditing={() => onNext(emailRef)}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="next"
        style={{backgroundColor: 'white', width: '100%'}}
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="done"
        style={{backgroundColor: 'white', width: '100%'}}
        onSubmitEditing={onDone}
      />
      <AuthButton text="Create Account" disabled={true} onPress={() => null} />
    </AuthLayOut>
  );
}
