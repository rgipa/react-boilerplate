import React from 'react'
import Async from 'react-async'

import todoModule from 'Module/todo'

import TodoList from 'Component/molecule/TodoList'

export default () => {
  const linkGenerator = React.useCallback((id) => `/todo/${id}`, [])

  return (
    <Async promiseFn={todoModule.fetchTodos}>
      <Async.Pending>Loading...</Async.Pending>
      <Async.Rejected>Error fetching data</Async.Rejected>
      <Async.Fulfilled>
        {(data) => <TodoList todos={data} getHref={linkGenerator} />}
      </Async.Fulfilled>
    </Async>
  )
}
