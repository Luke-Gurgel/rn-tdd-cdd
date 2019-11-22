import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { PageContainer } from '__storybook__/decorators/containers'
import CounsellingButton from '.'

storiesOf('Helpful button', module)
  .addDecorator(PageContainer)
  .add('affordable', () => <CounsellingButton price={20} canAfford />)
  .add('not affordable', () => (
    <CounsellingButton price={45} canAfford={false} />
  ))
