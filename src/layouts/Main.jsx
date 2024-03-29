import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

import wave from '../assets/wave.svg'
import Nav from "../components/Nav";

export function mainLoader() {
  const username = fetchData("username");
  return {
    username
  }
}

const Main = () => {
    const {username} = useLoaderData()

  return (
    <div className="layout">
      <Nav username={username} />
      <main>
          <Outlet />
      </main>
    <img src={wave} alt="" />
    </div>
  )
}

export default Main;