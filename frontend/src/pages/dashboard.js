import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { motion } from "framer-motion";


const Dashboard = () => {
  return (
    <motion.div>
      <Navbar/>
      
      <Footer />
      
    </motion.div>
  )
}

export default Dashboard
