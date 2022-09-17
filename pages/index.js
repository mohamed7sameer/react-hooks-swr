import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import useSWR from 'swr'

export default function Home() {
  const {data,error} = useSWR('/todos')
  return (
  <h1>

    {data && data.length}
   
  </h1>
  )
}
