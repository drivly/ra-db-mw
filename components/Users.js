import { Create, Datagrid, Edit, EmailField, List, ReferenceManyField, Show, SimpleForm, SimpleShowLayout, TextField, TextInput } from 'react-admin'

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
        <div className='grid grid-cols-4'>
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
        </div>
        {/* <SimpleShowLayout>
            <TextField source='id' />
            <TextField source='name' />
            <TextField source='username' />
            <EmailField source='email' />
            <TextField source='address.street' />
            <TextField source='phone' />
            <TextField source='website' />
            <TextField source='company.name' />
        </SimpleShowLayout> */}
        <SimpleShowLayout>
          <ReferenceManyField label='Posts' reference='posts' target='author_id'>
            <Datagrid rowClick='show'>
              {/* <ReferenceField source='userId' reference='users' link='show' /> */}
              {/* <TextField source='id' /> */}
              <TextField source='title' />
            </Datagrid>
          </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
)

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source='id' />
      <TextInput source='name' />
      <TextInput source='username' />
      <TextInput source='email' />
      <TextInput source='address.street' />
      <TextInput source='phone' />
      <TextInput source='website' />
      <TextInput source='company.name' />
    </SimpleForm>
  </Edit>
)

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source='id' />
      <TextInput source='name' />
      <TextInput source='username' />
      <TextInput source='email' />
      <TextInput source='address.street' />
      <TextInput source='phone' />
      <TextInput source='website' />
      <TextInput source='company.name' />
    </SimpleForm>
  </Create>
)