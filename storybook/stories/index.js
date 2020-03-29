import React from 'react';
import {Text, Button} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import Welcome from './Welcome';
import Logo from '../../js/Search.svg';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => <Button title="Example"></Button>)
  .add('with some emoji', () => <Text>😀 😎 👍 💯</Text>)
  .add('Search', () => <Logo width={220} height={240} />);
