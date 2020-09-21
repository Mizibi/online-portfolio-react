import React from 'react'
import { Header, Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './style/index.css'

type HomeProps = typeof Home.defaultProps & {};
type HomeStates = {};
class Home extends React.Component<HomeProps, HomeStates> {
  static defaultProps = {
    uri: '/'
  };
  state: HomeStates = {};

  render() {
    return (
      <main className="mzmain">
        <Segment inverted>
          <Header as={'h5'} inverted color='grey'>Hi I'm</Header>
          <Header as={'h1'} inverted color='red'>Kilian Dabard</Header>
          <Header as={'h2'} inverted color='grey'>I build web things</Header>
          <Header as={'h4'} inverted color='grey'>
            I'm a software engineer based in Paris,<br/>
            Specialized in building and occasionally designing<br/>
            servers, websites, applications, and everything in between.
          </Header>
          <Button as={Link} to='/contact' color='red' size='large'>Get in touch</Button>
        </Segment>
      </main>
    )
  }
}

export { Home }