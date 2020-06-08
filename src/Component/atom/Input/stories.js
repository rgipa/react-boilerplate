import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'

import Input from './index'

export const Default = () => <Input />

export const Loading = () => <Input isLoading={boolean('isLoading', true)} />

export default {
  component: Input,
  title: 'atom|Input',
  decorators: [withKnobs],
}
