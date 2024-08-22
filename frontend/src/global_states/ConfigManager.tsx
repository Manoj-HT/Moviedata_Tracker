import React, { createContext, useEffect, useState } from 'react'
import { ChildrenTypeProps, ConfigType, UseStateType } from '../types/types'

export const ConfigProvider = createContext(null as unknown as ConfigType)

const ConfigManager = ({children} : ChildrenTypeProps) => {
  const [data, setData] = useState(null as unknown as ConfigType)
  const getConfig = () =>{
    fetch('/config/config.json').then(res => res.json()).then(res=>{
      setData(res)
    })
  }
  useEffect(()=>{
    getConfig()
  },[])
  return (
    <ConfigProvider.Provider value={data} >{children}</ConfigProvider.Provider>
  )
}

export default ConfigManager