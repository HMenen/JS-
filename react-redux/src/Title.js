import React from 'react'

const ThemeContext = React.createContext({
  background: 'red',
  color: 'white'
});

class Title extends React.Component{
  render() {
    return(
      <ThemeContext.Consumer>
        {theme => (
          <p style={{background: theme.background, color: theme.color}}>
            {this.props.children}
          </p>
        )}
      </ThemeContext.Consumer>
    )
  }
}

class Header extends React.Component{
  render() {
    return(
      <Title>hdasd</Title>
    )
  }
}

class Theme extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      background: 'green',
      color: 'white'
    }
  }

  render() {
    return(
      <ThemeContext.Provider value={this.state}>
        <Header />
      </ThemeContext.Provider>
    )
  }
}

export default Theme