import React from 'react'
import createStore from './redux'

const Context = React.createContext(null);
export class Provider extends React.Component{
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
    this.clear = this.store.subscribe(this.setState(this.store.getState()));
  }

  componentWillUnmount() {
    this.clear();
  }

  render() {
    return(
      <Context.Provider value={this.store}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const connect = (stateMapToProps = () => {}, dispatchMapToProps = () => {}) => (Component) => (props) => (
 <Context.Consumer>
   {
     (value) => {
        const stateMap =  stateMapToProps(value.propsState, props);
        const dispatchMap = dispatchMapToProps(value.dispatch, props);
        return(
          <Component {...stateMap} {...dispatchMap} {...props}></Component>
        )
      }
   }
 </Context.Consumer>
)

