import { NextPage } from "next"
import { Styles } from "../styles/Styles"

const Home: NextPage = () => {
  const { h1 } = Styles;
  return (

    <h1 className="text-2xl font-bold underline text-yellow-600">
      Hello world!
    </h1>

  )
}

export default Home
