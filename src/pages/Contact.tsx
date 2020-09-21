import React from 'react'
import { Header } from 'semantic-ui-react'

import './style/index.css'

type ContactProps = typeof Contact.defaultProps & {};
type ContactStates = {};
class Contact extends React.Component<ContactProps, ContactStates> {
  static defaultProps = {
    uri: '/contact'
  };
  state: ContactStates = {};

  render() {
    return (
      <main className="mzmain">
        <Header as={'h1'} inverted>Contact</Header>
      </main>
    )
  }
}

export { Contact }