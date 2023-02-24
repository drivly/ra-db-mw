import dynamic from 'next/dynamic'
import yaml from 'yaml'
import fs from 'fs'

const App = dynamic(() => import('@/components/App'), { ssr: false })

const Home = props => {
  return <App {...props} />
}

export async function getStaticProps() {
  const graphdl = yaml.parse(fs.readFileSync('graphdl.yaml', 'utf8'))
  console.log({graphdl})
  return {
    props: {
      graphdl
    }
  }
}

export default Home