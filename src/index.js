import React from 'react'
import _ from 'lodash/fp'

const helloWorld = () => {
  const myArray = ['world', 'library', 'pet project']

  const listItem = item => {
    return <li key={item}>{item}</li>
  }

  return (
    <div>
      <h1>Hello!</h1>
      <ul>{_.map(listItem, myArray)}</ul>
    </div>
  )
}

export { helloWorld }
