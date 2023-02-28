import { Datagrid, List, ReferenceField,  Show, SimpleShowLayout, Resource, ShowGuesser, TextField } from 'react-admin'


export const Post = (props) => <Resource name='posts' list={PostList} show={ShowGuesser} edit={EditGuesser} {...props} />

export const PostList = props => (
  <List>
    <Datagrid rowClick='show'>
      <ReferenceField source='userId' reference='users' link='show' />
      <TextField source='id' />
      <TextField source='title' />
      <TextField source='body' />
    </Datagrid>
  </List>
)

export const PostShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source='userId' reference='users' link='show' />
            <TextField source='id' />
            <TextField source='title' />
            <TextField source='body' />
        </SimpleShowLayout>
    </Show>
)