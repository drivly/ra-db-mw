import { Datagrid, EmailField, List, Show, SimpleShowLayout, TextField } from 'react-admin'

export const UserList = () => (
    <List>
        <Datagrid rowClick='show'>
            <TextField source='id' />
            <TextField source='name' />
            <TextField source='username' />
            <EmailField source='email' />
            <TextField source='address.street' />
            <TextField source='phone' />
            <TextField source='website' />
            <TextField source='company.name' />
        </Datagrid>
    </List>
)

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source='id' />
            <TextField source='name' />
            <TextField source='username' />
            <EmailField source='email' />
            <TextField source='address.street' />
            <TextField source='phone' />
            <TextField source='website' />
            <TextField source='company.name' />
        </SimpleShowLayout>
    </Show>
)