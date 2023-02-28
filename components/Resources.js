import { Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin'

const Resources = () => (
  <>
    <Resource name="posts" link='show' list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    <Resource name="comments" link='show' list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    <Resource name="todos" link='show' list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    <Resource name="users" link='show' list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
  </>
)

export default Resources