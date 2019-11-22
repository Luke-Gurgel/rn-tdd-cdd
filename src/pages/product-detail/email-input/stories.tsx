import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { PageContainer } from '__storybook__/decorators/containers'
import EmailInput from '.'

storiesOf('Email input', module)
  .addDecorator(PageContainer)
  .add('default appearance', () => <EmailInput />)
  .add('email is required error', () => (
    <EmailInput error={{ type: 'required', message: 'Email is required' }} />
  ))
  .add('invalid email error', () => (
    <EmailInput
      error={{ type: 'invalid', message: 'Please enter a valid email' }}
    />
  ))
