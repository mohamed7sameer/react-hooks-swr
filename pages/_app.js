import '../styles/globals.css'
// import "tailwindcss/tailwind.css";
import NavBar from '../components/NavBar' ;

import { SWRConfig } from 'swr';

import axios from 'axios';

import AddTodo from '../components/AddTodo';

axios.defaults.baseURL = "http://localhost:4000";
import Todos from './todos';
function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{
      fetcher: (url)=>{
        return axios.get(url).then((res)=>{
          return res.data;
        })
      }
    }}>
    <NavBar />
    <AddTodo />
    <Component {...pageProps} />
    {/* <Todos /> */}
  </SWRConfig>
  )
}

export default MyApp
