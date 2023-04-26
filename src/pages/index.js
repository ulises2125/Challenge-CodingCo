import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/something/styles/Home.module.css'
import variables from '../styles/variable.module.scss'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Footer></Footer>
    </>
  )
}
