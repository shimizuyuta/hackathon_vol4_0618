import React from 'react'

const List = (datas) => {

  return (
    <div>
      {datas.map((data,index) => {
        <p key={index}>{data}</p>
      })}
    </div>
  )
}

export default List