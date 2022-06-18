import React from 'react'

const List = (datas) => {

  return (
    <div>
      {datas.map((data) => {
          <p key={data}>{data}</p>
      })}
    </div>
  )
}

export default List