import * as React from 'react'
import { Admin, Resource, ListGuesser, useGetOne } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import Resources from './Resources'
import Layout from './Layout'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = ({resources}) => {
  Layout.resources = resources
  // const { data: user, isLoading, error } = useGetOne('users', { id: userId })
  return (
    <Admin dataProvider={dataProvider} layout={Layout}>
      {/* {resources?.map(resource => <Resource name='posts' list={ListGuesser} />)} */}
      <Resource name='posts' list={ListGuesser} />
      <Resource name='comments' list={ListGuesser} />
      <Resource name='todos' list={ListGuesser} />
      <Resource name='users' list={ListGuesser} />
    </Admin>
  )
}

export default App