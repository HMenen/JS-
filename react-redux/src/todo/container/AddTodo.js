// import React from 'react'
// import { connect } from 'react-redux'
// import { addTodo } from '../action/index'

// class AddTodo extends React.Component{
//   constructor(props){
//     super(props)
//     this.store = props.store
//     this.dispatch = this.store.dispatch
//   }

//   render() {
//     let input
//     return(
//       <div>
//         <form onSubmit={e => {
//           e.preventDefault();
//           this.store.dispatch(addTodo(input.value))
//           input.value = '';
//         }}>
//           <input ref={node => input = node}/>
//           <button type='submit'>
//             ADD TODO
//           </button>
//         </form>
//       </div>
//     )
//   }
// }

// export default connect()(AddTodo);

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
