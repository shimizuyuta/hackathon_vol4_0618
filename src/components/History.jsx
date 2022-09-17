import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DeleteIcon from '@mui/icons-material/Delete'
// import TextField from '@mui/material/TextField'
// import InputAdornment from '@mui/material/InputAdornment'
import { CopyToClickboard } from '../modules/index'
import { deleteContent } from '../modules/chrome'
import { useState, useEffect, createRef } from 'react'
import Tooltip from '@mui/material/Tooltip'
import { Box } from '@mui/system'
import Checkbox from '@mui/material/Checkbox'
import { InputAdornment, TextField } from '@mui/material'

function History({ datas, textData }) {
  const [text, setText] = useState('')
  const ref = createRef()
  const [checkedItems, setCheckedItems] = useState([])
  console.log(datas, 'datas')
  console.log('text',text)

  //[{item: "'AA',", checked: false},{item: "'BB',", checked: false}]
  const handleChange = (e) => {
    let zzz = new Array()
    checkedItems.map((checkedItem, index) => {
      console.log(checkedItem, 'checkedItemだよ')
      //☑が入っているとき→[{item: "'AA',", checked: true},{item: "'BB',", checked: false}]
      if (checkedItem['item']===e.target.value && checkedItem['checked']===true) {
        checkedItem['checked'] = false
        zzz.push(checkedItem)
      }else if(checkedItem['item']===e.target.value){
        checkedItem['checked'] = true
        zzz.push(checkedItem)
      }else {
        //入ってないとき
        zzz.push(checkedItem)
        console.log('該当しないからそのまま配列に入る')
      }
      setCheckedItems(zzz)
    })
  }
  console.log('checkedItems調べ',checkedItems)

  const deleteCheckedItem = (index,checkedItem) =>{
    console.log(index,'index')
    console.log(checkedItem,'checkedItem')
    //ストレージから削除
    deleteContent(index)
    //   //[{item: "'AA',", checked: false},{item: "'BB',", checked: false}]
    console.log(checkedItems,'checkedItems++')
      checkedItems.splice(index,1)
    console.log('更新後のcheckedItems',checkedItems)
    setCheckedItems(checkedItems)
  }

  const bbb = () => {
    console.log('fafa', checkedItems)
  }
  useEffect(() => {
    setText(textData)
  }, [textData])

  useEffect(() => {
    console.log('datas === undefined', datas === undefined)
    if (datas === undefined) {
      setCheckedItems([])
    } else {
      console.log('ここ？',datas)
      let sample = datas.map((data) => {
        return { item: data, checked: false }
      })
      console.log('これが追加されるお', [...sample])
      setCheckedItems([ ...sample])
    }
  }, [datas])
  //[]これは最初に呼ばれてるからダメ
  //[datas] useeffect/uselayout両方ダメ
  //毎回：ダメ
  //

  return (
    <>
      <Box
        sx={{
          maxHeight: '60vmx',
          minHeight: '50vmx',
          margin: '.6rem',
        }}
      >
        {datas &&
          checkedItems.length !== 0 &&
          datas.map((data, index) => (
            <List
              sx={{
                padding: '5px',
                margin: '4px',
                dense: true,
                display: 'flex',
                flexDirection: 'row',
              }}
              key={index}
            >
              <ListItem key={index} disablePadding sx={{ paddingTop: '5px' }}>
                <Box sx={{ width: '30px' }}>
                  <ListItemIcon>
                    <Checkbox
                      // checked={true}
                      checked={checkedItems[index]['checked']}
                      onChange={handleChange}
                      id={index}
                      value={data}
                    />
                  </ListItemIcon>
                </Box>
                <button onClick={bbb}>fafafa</button>
                <ListItemText className='ellipsis' id={index} primary={data} />
                <Tooltip title='コピー'>
                  <IconButton onClick={() => CopyToClickboard(data)}>
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title='削除'>
                  <IconButton
                    onClick={() => {
                      // deleteContent(index)
                      deleteCheckedItem(index,checkedItems[index])
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </ListItem>
              {/* <button onClick={ a }>a click</button> */}
            </List>
          ))}
      </Box>
      <Box
        sx={{
          minHeight: '30vmx',
          margin: '1rem',
          width: '100%',
        }}
      >
        <TextField
          id='outlined-textarea'
          value={textData}
          inputRef={ref}
          multiline
          fullWidth
          rows={3}
          maxRows={10}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <Tooltip title="コピー">
                  <IconButton onClick={() => CopyToClickboard(ref.current.value)}>
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
          sx={{ width: '470px' }}
        />
      </Box>
    </>
  )
}

export default History
