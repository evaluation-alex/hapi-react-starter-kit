import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import { Link } from 'react-router';
import { defineMessages, FormattedMessage } from 'react-intl';
import Button from '../themes/default/Button';

const messages = defineMessages({
  welcomeMessage: {
    id: 'index.helloWorld',
    description: 'Welcome message for a user or guest',
    defaultMessage: 'Hello World!'
  },
  takeMeHome: {
    id: 'index.takeMeHome',
    description: 'Message for LINK button take me home',
    defaultMessage: 'Take me home...'
  }
});

export default class Index extends Component {
  render() {
    return (
			<StyleRoot id="index">
        <div><FormattedMessage {...messages.welcomeMessage} /></div>
				<Link to={ '/home' } ><Button><FormattedMessage { ...messages.takeMeHome } /></Button></Link>
			</StyleRoot>
		);
  }
}