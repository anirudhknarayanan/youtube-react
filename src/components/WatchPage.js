import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'

const WatchPage = () => {
  let dispatch =useDispatch()
  useEffect(()=>{
              dispatch(closeMenu()
              )
  },[])

  const [params] = useSearchParams()
  console.log(params.get("v"));
  
  return (
    <div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+params.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage
