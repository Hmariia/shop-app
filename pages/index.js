import homeStyles from '../styles/Home.module.css'
import Body from '../components/Body'
import CardList from '../components/CardList'
import React, { useState, useEffect } from 'react'
import { server } from '../config'

export default function Home() {
  const [items, setItems] = useState([])

  const fetchUsers = async () => {
    const res = await fetch(`${server}/api/items`)
    const data = await res.json()

    return data
  }

  useEffect (() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      setItems(usersFromServer)
    }

    getUsers()
  }, [])
  
  return (
    <div className={homeStyles.container}>
      <Body />
      <CardList items={items} />
    </div>
  )
}
