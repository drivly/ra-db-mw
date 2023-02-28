import { Resource, Create, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin'

const defaultProperties = {
  id: 'string',
  icon: 'string',
  name: 'string',
  description: 'markdown',
}

const Noun = (props) => 
  <Resource 
    name={name} 
    hasCreate 
    list={List} 
    create={Create} 
    edit={Edit} 
    show={Show} 
    link='show'
    {...props}
  />


const List = props => ListGuesser(props)
const Show = props => ShowGuesser(props)
const Edit = props => EditGuesser(props)

// const Create = props => (
//   <Create>
//     <Form {...props} />
//   </Create>
// )

const CreateForm = props => (
  <Create>
    <SimpleForm>
      <TextField source='title' /> {/* SimpleForm will add a label, too (TextField has addLabel:true in defaultProps) */}
      <BodyField /> {/* SimpleForm will NOT add a label */}
      <NumberInput source='nb_views' /> {/* SimpleForm will NOT add a label */}
    </SimpleForm>
  </Create>
)

export default Noun