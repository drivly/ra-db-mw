import dynamic from 'next/dynamic'

const App = dynamic(() => import('../components/App'), { ssr: false })


const Home = props => {
  return <App {...props} />
}

export default Home