import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DeleteIcon from '@mui/icons-material/Delete'
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system'
import InputAdornment from '@mui/material/InputAdornment'
import { CopyToClickboard } from '../modules/index'
import { deleteContent } from '../modules/chrome'
import Tooltip from '@mui/material/Tooltip';
import { useState, useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';

function History({datas,textData}) {

  const [text, setText] = useState('text')
  // チェックされているかのboolean配列
  const [isChecked, setIsChecked] = useState([])
  // チェックされているindexのリスト
  const [checkedIndex, setCheckedIndex] = useState([])
  // オブジェクト
  const [ob, setOb] = useState([])



  // https://qiita.com/seira/items/ccdb70b63cdce097aeb3の内容
  const [checkedItems, setCheckedItems] = useState({})
  const [isBtnHide, setIsBtnHide] = useState(true)
  const MyCheckBox = ({id, value, checked, onChange}) => {
    return (
      <input
        id={id}
        type="checkbox"
        name="inputNames"
        checked={checked}
        onChange={onChange}
        value={value}
      />
    )
  }
  useEffect(() => {
    //checkedItemsが空では無い場合、送信ボタンを表示させる
        Object.keys(checkedItems).length && setIsBtnHide(false)
    //すべてのcheckedItemの値がfalseの場合に送信ボタンを表示させる
        setTimeout(() => {
          if (
            Object.values(checkedItems).every(checkedItem => {
              return checkedItem === false
            })
          ) {
            setIsBtnHide(true)
          }
        },100);
      }, [checkedItems])
  const handleChange2 = e => {
    setCheckedItems({
      ...checkedItems,
      [e.target.id]: e.target.checked
    })
    console.log('checkedItems:', checkedItems)
  }
  const dataSendBtn = e => {
    //既定のイベントをキャンセルさせる
        e.preventDefault()
    //送信ボタンを押したタイミングで、checkedItemsオブジェクトのvalueがtrueのkeyのみを配列にしてconsoleに表示させる
        const dataPushArray = Object.entries(checkedItems).reduce((pre,[key, value])=>{
          value && pre.push(key)
          return pre
        },[])
        console.log("dataPushArray:", dataPushArray)
      }





  useEffect(() => {
    setText(textData)
  },[textData])

  useEffect(() => {
    console.log('datasのuseEffect')
    if(datas){
      // 履歴全削除時にcheckedIndexもリセット
      if(!datas.length) setCheckedIndex([])
      // checkedIndexから履歴分のisCheckedを生成
      setIsChecked(datas.map((data, index) =>{
        return checkedIndex.includes(index)
      }))

      // object版の処理
      // datasが更新されたらtrueをセット
      // 追加されたら以前の引継ぎ
      // 削除されたらその要素だけ削除
      // oldCheckを入れたらいい？？
      // if(oldChecked.length < datas.length)(追加されたとき)
      console.log('処理前object : ',ob)
      if(!datas.length){
        // setOb([])
        console.log('全削除')
      }else if(datas.length > ob.length){
        console.log('追加')
        let newIndex = datas.length-1
        let newData = datas[newIndex]
        // console.log(newData)
        // setOb([...ob,{text:{newData},isChecked:true,index:{newIndex}}])
        //ob.push({text:{datas[datas.length-1]}})
      }else{
        console.log('削除')
      }
      setOb(datas.map((data, index) =>{
        return {text:{data},isChecked: true, index:{index}}
      }))
      //console.log('処理後object : ',ob)
    }
  },[datas])

  const handleChange = (e,index) => {
    e.target.checked ? console.log("o") : console.log('x')
    if(e.target.checked){
      // 新しくチェックしたとき
      setCheckedIndex([...checkedIndex, index])
      setIsChecked(isChecked.map((value,i) => {
        if(i === index) return true
        else return value
      }))
    }else{
      // チェック外した時
      setCheckedIndex(checkedIndex.filter(i => i !== index))
      setIsChecked(isChecked.map((value,i) => {
        if(i === index) return false
        else return value
      }))
    }
  }

  const deleteAction = (index) => {
    // console.log('index : ',index)
    // console.log('checked : ',checkedIndex)
    setCheckedIndex(checkedIndex.filter(i => i !== index))
    // console.log('削除後 : ',checkedIndex)
    setCheckedIndex(checkedIndex.map(i => {
      if(i > index){
        return i - 1
      }else{
        return i
      }
    }))
    deleteContent(index)
  }

  const handleClick = () => {
    checkedIndex.sort((first, second) => first - second);
    //console.log('検証 : ',checkedIndex)
    console.log('処理後object : ',ob)
  }

  const handleClick2 = () => {
    console.log('チェックの配列: ',isChecked)
  }

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
          datas.map((value, index) => (
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
                <Checkbox 
                  checked={isChecked[index]}
                  onChange={(e)=>{handleChange(e,index)}}
                />
                <ListItemText className="ellipsis" id={index} primary={value} />
                  <Tooltip title="コピー">
                    <IconButton onClick={() => CopyToClickboard(value)}>
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="削除">
                    <IconButton
                      onClick={() => {
                        deleteAction(index)
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
              </ListItem>
            </List>
          ))}
      </Box>
      <button onClick={handleClick}>ちぇっく</button>
      <button onClick={handleClick2}>配列</button>
      <h2>好きな食べ物</h2>
      <form>
        {datas && datas.map((item, index) => {
          index = index + 1
          return (
            <label htmlFor={`id_${index}`} key={`key_${index}`}>
              <MyCheckBox
                id={`id_${index}`}
                value={item}
                onChange={handleChange2}
                checked={checkedItems[item.id]}
              />
              {item}
            </label>
          )
        })}
{/* checkedがない場合には送信ボタンを表示させない */}
        {!isBtnHide && <button onClick={dataSendBtn}>アンケート送信ボタン</button>}
      </form>
      <Box
        sx={{
          minHeight: '30vmx',
          margin: '1rem',
          width: '100%',
        }}
      >
        <TextField
          id='outlined-textarea'
          // value={textData}
          onChange={(e)=>{setText(e.target.value)}}
          value={text}
          multiline
          fullWidth
          rows={3}
          maxRows={10}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <Tooltip title="コピー">
                  <IconButton onClick={() => CopyToClickboard(text)}>
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
