const List = (datas) => {
  return (
    <div>
      {datas.map((data, index) => {
        return <p key={index}>{data}</p>
      })}
    </div>
  )
}

export default List
