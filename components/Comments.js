import { Datagrid, EmailField, List, ReferenceField,  Show, SimpleShowLayout, TextField } from 'react-admin'

export const CommentList = () => (
    <List>
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