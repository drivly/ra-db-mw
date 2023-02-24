import * as React from 'react'
import { Admin, Resource, ListGuesser } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import Resources from './Resources'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name='posts' list={ListGuesser} />
    <Resource name='comments' list={ListGuesser} />
    <Resource name='todos' list={ListGuesser} />
    <Resource name='users' list={ListGuesser} />
  </Admin>
)

export default App