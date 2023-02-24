import { Resource, ListGuesser } from 'react-admin'

const Resources = () => (
  <>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
    <Resource name="todos" list={ListGuesser} />
    <Resource name="users" list={ListGuesser} />
  </>
)

export default Resources