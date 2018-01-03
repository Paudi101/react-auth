import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          //By defualt do not have an exact height and width
          <TextInput/>
        </CardSection>

        <CardSection/>

        <CardSection>
          <Button>Login</Button>
        </CardSection>

      </Card>
    );
  }
}
export default LoginForm;
