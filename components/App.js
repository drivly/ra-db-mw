import * as React from 'react'
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser, Create, SimpleForm, TextInput, DateInput, NumberInput, useGetList, useGetOne } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { RichTextInput } from 'ra-input-rich-text'
import Resources from './Resources'
import Layout from './Layout'
import Noun from './Noun'
// import dataProvider from '@/utils/dataProvider'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = ({resources}) => {
  Layout.resources = resources
  // const { data: user, isLoading, error } = useGetOne('users', { id: userId })
  // const { data, total, isLoading, error } = useGetList(
  //   'Noun',
  //   { 
  //       pagination: { page: 1, perPage: 20 },
  //       // sort: { field: 'published_at', order: 'DESC' }
  //   }
  // )
  return (
    <Admin dataProvider={dataProvider} layout={Layout}>
      {/* {resources && Object.entries(resources).map(resource => <Resource name={resource[0]} list={ListGuesser} />)} */}
      <Resource name="Nouns" hasCreate list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
      <Resource name="posts" hasCreate list={ListGuesser} create={DynamicCreate} edit={EditGuesser} show={ShowGuesser} />
      <Resource name="comments" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
      {/* <Resource name="todos" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
      <Resource name="users" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} /> */}
    </Admin>
  )
}

const DynamicCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" fullWidth label='Title' />
      <TextInput source="teaser" fullWidth multiline={true} label="Short description" />
      <RichTextInput source="body" fullWidth />
      <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
    </SimpleForm>
  </Create>
)

export default App