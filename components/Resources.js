import { Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin'

const Resources = () => (
  <>
    <Resource name="posts" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    <Resource name="comments" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    <Resource name="todos" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    <Resource name="users" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
  </>
)

export default Resources