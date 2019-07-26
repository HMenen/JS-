import React from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  }
 }

const ThemeContext = React.createContext(themes);

const MyButton = (props, context) => (
  <button
    {...props}
    style={{backGroundColor: context.background}}>
  </button>
)

const ToolBar = (props) => (
  <MyButton onClick={props.changeTheme}>
    change theme
  </MyButton>
)

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    }

    this.toggle = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark ? themes.light : themes.dark
      }))
    }
  }

  render() {
    return(
      <React.Fragment>
      <ThemeContext.Provider value={this.state.theme}>
        <ToolBar changeTheme={this.toggle}/>
      </ThemeContext.Provider>
      <div>
        <MyButton />
      </div>
      </React.Fragment>
    )
  }

}