import React from 'react'
import NavBar from './NavBar'
import History from './History'

function Top(props) {
  const [textData, setTextData] = React.useState('')

  const output = (data) => {
    var out = ''
    for (var i = 0; i < data.length; i++) {
      out += data[i] + '\n\n'
    }
    setTextData(out)
  }

  return (
    <div>
      <NavBar
        deleteStorage={props.deleteStorage}
        datas={props.datas}
        output={output}
        contents={
          <History
            textData={textData}
            datas={props.datas}
            deleteContent={props.deleteContent}
          />
        }
      />
    </div>
  )
}

export default Top
