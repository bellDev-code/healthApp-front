import React from 'react';
import styled from 'styled-components/native';
import {colors, fontWeight} from '../../Theme';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0px 40px;
`;

const Logo = styled.Text`
  color: ${colors.white};
  font-size: 30px;
  font-weight: ${fontWeight.middle};
  height: 10%;
  margin-bottom: 50px;
`;

// 임시 Text 처리 추후 logo image 적용 예정
// const Logo = styled.Image`
//   max-width: 50%;
//   width: 100%;
//   height: 100px;
//   margin-bottom: 20px;
// `;

export default function AuthLayOut({children}) {
  return (
    <Container>
      <Logo>Go to the fuxxing Gym</Logo>
      {children}
    </Container>
  );
}
