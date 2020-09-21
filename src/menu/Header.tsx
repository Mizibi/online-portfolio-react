import React from 'react'
import { Menu } from 'semantic-ui-react'
import { pagesToMenu } from 'pages/tools/pages'

import './index.css'

type HeaderProps = typeof Header.defaultProps & {};
type HeaderStates = {
  activeItem: string,
};
class Header extends React.Component<HeaderProps, HeaderStates> {
  static defaultProps = {};
  state: HeaderStates = {
    activeItem: '/'
  };

  render() {
    const { activeItem } = this.state

    return (
      <header className="mzheader">
        <Menu inverted>
          {pagesToMenu(activeItem, (item: string) => this.setState({ activeItem: item }))}
        </Menu>
      </header>
    )
  }
}

export { Header }