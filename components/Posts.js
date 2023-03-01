import { RichTextInput } from 'ra-input-rich-text'
import { Datagrid, Edit, List, ReferenceField, Show, SimpleShowLayout, ReferenceInput, Resource, ShowGuesser, SimpleForm, TextField, TextInput, Create, ReferenceManyField } from 'react-admin'


export const Post = (props) => <Resource name='posts' list={PostList} show={ShowGuesser} edit={EditGuesser} {...props} />

const postFilters = [
  <TextInput label="Search" source="q" />,
  <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
  <ReferenceInput source="userId" reference="users" />,
]

export const PostList = props => (
  <List filters={postFilters} hasCreate={true} exporter={false} >
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
      <ReferenceManyField label="Comments" reference="comments" target="postId">
        <Datagrid rowClick='show'>
          <TextField source='id' />
          <TextField source='name' />
          <TextField source='email' />
          <TextField source='body' />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
)

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="id" />
      <TextInput source="title" fullWidth multiline={true} />
      <RichTextInput source="body" fullWidth multiline={true} />
    </SimpleForm>
  </Edit>
)


export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="id" />
      <TextInput source="title" fullWidth multiline={true} />
      <RichTextInput source="body" fullWidth multiline={true} />
    </SimpleForm>
  </Create>
)