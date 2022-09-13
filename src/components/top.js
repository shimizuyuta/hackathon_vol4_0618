import NavBar from './NavBar'
import History from './History'

function Top(props) {
  return (
    <div>
      <NavBar
        deleteStorage={props.deleteStorage}
        datas={props.datas}
        output={props.output}
        contents={
          <History
            textData={props.textData}
            datas={props.datas}
            deleteContent={props.deleteContent}
          />
        }
      />
    </div>
  )
}

export default Top
