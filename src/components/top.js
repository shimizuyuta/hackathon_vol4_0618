import NavBar from './NavBar'
import History from './History'

function Top(props) {
  console.log(props, 'top props')
  return (
    <div>
      <NavBar
        deleteStorage={props.deleteStorage}
        datas={props.datas}
        output={props.output}
        contents={<History textData={props.textData} datas={props.datas} />}
      />
    </div>
  )
}

export default Top
