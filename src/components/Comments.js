import React from 'react'
import Comment from './Comment'
import commentsData from '../utils/mockData/commentsData'



const Comments = () => {
  return (
        <div className="mt-6">
          <h2 className="font-bold text-lg mb-4">
            Comments
          </h2>

          <div className="space-y-4">
          {commentsData.map((item)=><Comment key={item.id} data={item}/>)}
           
           
          </div>
        </div>
  )
}

export default Comments
