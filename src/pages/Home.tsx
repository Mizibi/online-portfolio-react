import React from 'react'

type HomeProps = typeof Home.defaultProps & {
  message: string,
};

type MyState = {
  count: number,
};
class Home extends React.Component<HomeProps, MyState> {
  static defaultProps = {
    name: 'world',
  };
  state: MyState = {
    count: 0,
  };

  render() {
    return (
      <div>
        {this.props.message} {this.state.count}
      </div>
    )
  }
}

export { Home }