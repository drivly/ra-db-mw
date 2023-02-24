import dynamic from 'next/dynamic'
import yaml from 'yaml'
import fs from 'fs'

const App = dynamic(() => import('@/components/App'), { ssr: false })

const Home = props => {
  return <App {...props} />
}

export async function getStaticProps() {
  const graphdl = yaml.parse(fs.readFileSync('graphdl.yaml', 'utf8'))
  const { _name: name, _seed: seed, _defaultId: defaultId, _constraints: constraints, ...resources } = graphdl
  console.log({ name, seed, defaultId, constraints, resources })
  return {
    props: { name, seed, defaultId, constraints, resources }
  }
}

export default Home