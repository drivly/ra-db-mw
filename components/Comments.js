import { Datagrid, EmailField, List, ReferenceField, ReferenceInput, Show, SimpleShowLayout, TextField, TextInput } from 'react-admin'

const commentFilters = [
  <TextInput label='Search' source='q' />,
  <ReferenceInput source='postId' reference='posts' />,
]

export const CommentList = () => (
    <List filters={commentFilters}>
        <Datagrid rowClick='show'>
            <ReferenceField source='postId' reference='posts' link='show' />
            <TextField source='id' />
            <TextField source='name' />
            <EmailField source='email' />
            <TextField source='body' />
        </Datagrid>
    </List>
)

export const CommentShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source='postId' reference='posts'  link='show'/>
            <TextField source='id' />
            <TextField source='name' />
            <EmailField source='email' />
            <TextField source='body' />
        </SimpleShowLayout>
    </Show>
)