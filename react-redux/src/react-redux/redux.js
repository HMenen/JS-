const createStore  = function (reducer) {
  const INIT = 'INIT';
  const lisener = [];
  let currentState = undefined;
  let clear = () => {};

  function getState () {
    return currentState;
  }

  function subscribe (callback) {
    lisener.push(callback);
    let clear = (callback) => {
      let index = lisener.indexOf(callback);
      lisener.splice(index, 1);
    }
    return clear; 
  }

  function dispatch (reducer, action) {
    lisener.forEach(callback => {
      callback();
    })
    reducer(action);
  }

  return{
    getState,
    subscribe,
    dispatch
  }
}

export default createStore;