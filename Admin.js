import * as React from "react"

import { Admin, Resource } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'
import Resources from './Resources'

import { PostList } from './posts'

const App = () => (
    <Admin dataProvider={simpleRestProvider('http://path.to.my.api')}>
        <Resource name="posts" list={PostList} />
    </Admin>
)

export default App