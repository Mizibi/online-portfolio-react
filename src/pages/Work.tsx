import React from 'react'
import { Header } from 'semantic-ui-react'

import './style/index.css'

type WorkProps = typeof Work.defaultProps & {};
type WorkStates = {};
class Work extends React.Component<WorkProps, WorkStates> {
  static defaultProps = {
    uri: '/work'
  };
  state: WorkStates = {};

  render() {
    return (
      <main className="mzmain">
        <Header as={'h1'} inverted>Work</Header>
      </main>
    )
  }
}

export { Work }