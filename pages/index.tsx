import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </Layout>
  )
}

export default Home
