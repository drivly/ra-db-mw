import { BooleanField, BooleanInput, Datagrid, List, ReferenceField, ReferenceInput, Show, SimpleShowLayout, TextField, TextInput } from 'react-admin'


const todoFilters = [
  <TextInput label='Search' source='q' />,
  <BooleanInput source='completed' />,
  <ReferenceInput source='userId' reference='users' />,
]

export const TodoList = () => (
    <List filters={todoFilters}>
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