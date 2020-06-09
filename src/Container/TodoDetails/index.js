import React from 'react'
import Async from 'react-async'

import todoModule from 'Module/todo'

import TodoDetails from 'Component/molecule/TodoDetails'

export default ({ id }) => {
  return (
    <Async promiseFn={todoModule.fetchTodo} id={id}>
      <Async.Pending>Loading...</Async.Pending>
      <Async.Rejected>Error fetching data</Async.Rejected>
      <Async.Fulfilled>{(data) => <TodoDetails {...data} />}</Async.Fulfilled>
    </Async>
  )
}
