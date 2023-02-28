import { BooleanField, Datagrid, List, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin'

export const TodoList = () => (
    <List>
        <Datagrid rowClick='show'>
            <ReferenceField source='userId' reference='users' link='show' />
            <TextField source='id' />
            <TextField source='title' />
            <BooleanField source='completed' />
        </Datagrid>
    </List>
)

export const TodoShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source='userId' reference='users' link='show' />
            <TextField source='id' />
            <TextField source='title' />
            <BooleanField source='completed' />
        </SimpleShowLayout>
    </Show>
)