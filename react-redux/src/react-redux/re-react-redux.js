import React from 'react'
import redux from './redux'

const Context = React.createContext(null);
class Provider extends React.Component{
  constructor(props) {
    super(props);
    this.store = props.store;
    this.state = {
      dispatch: this.store.dispatch,
      propsState: this.store.props
    }
    this.clear = () => {};
  }

  componentDidMount() {
    clear = this.store.subscribe(this.setState(this.store.getState()));
  }

  componentWillUnmount() {
    clear();
  }

  render() {
    return(
      <Context.Provider>
        {this.props.children}
      </Context.Provider>
    )
  }
}

const connect = (stateMapToProps, dispatchMapToProps) => (Component) => (props) => (
 <Context.Consumer>
   {
     (value) => (

     )
   }
 </Context.Consumer>
)

