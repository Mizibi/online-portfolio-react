import React from 'react'
import { Header } from 'semantic-ui-react'

import './style/index.css'

type AboutProps = typeof About.defaultProps & {};
type AboutStates = {};
class About extends React.Component<AboutProps, AboutStates> {
  static defaultProps = {
    uri: '/about'
  };
  state: AboutStates = {};

  render() {
    return (
      <main className="mzmain">
        <Header as={'h1'} inverted>About</Header>
      </main>
    )
  }
}

export { About }