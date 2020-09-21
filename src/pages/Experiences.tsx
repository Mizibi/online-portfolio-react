import React from 'react'
import { Header } from 'semantic-ui-react'

import './style/index.css'

type ExperiencesProps = typeof Experiences.defaultProps & {};
type ExperiencesStates = {};
class Experiences extends React.Component<ExperiencesProps, ExperiencesStates> {
  static defaultProps = {
    uri: '/experiences'
  };
  state: ExperiencesStates = {};

  render() {
    return (
      <main className="mzmain">
        <Header as={'h1'} inverted>Experiences</Header>
      </main>
    )
  }
}

export { Experiences }