import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DeleteIcon from '@mui/icons-material/Delete'
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system'
import InputAdornment from '@mui/material/InputAdornment'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { CopyToClickboard } from '../modules/index'
import { deleteContent } from '../modules/chrome'
import Drawer from '@mui/material/Drawer';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DownloadIcon from '@mui/icons-material/Download'
import { download } from '../modules/index'
import Tooltip from '@mui/material/Tooltip';
import { useState, useEffect, createRef } from 'react'

function History({datas,textData}) {

  const [text, setText] = useState('text')
  const [isOpenDrawer, setDrawerState] = useState(false)
  const ref = createRef()

  useEffect(() => {
    setText(textData)
  },[textData])

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
                <Box sx={{ width: '30px' }}>
                  <ListItemIcon>
                    <KeyboardArrowRightIcon />
                  </ListItemIcon>
                </Box>
                <ListItemText className="ellipsis" id={index} primary={value} />
                  <Tooltip title="コピー">
                    <IconButton onClick={() => CopyToClickboard(value)}>
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="削除">
                    <IconButton
                      onClick={() => {
                        deleteContent(index)
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
              </ListItem>
            </List>
          ))}
      </Box>
      <Box
        sx={{
          minHeight: '30vmx',
          margin: '1rem',
          width: '100%',
        }}      >  
        <Box className='drawerOn'>
            <IconButton
              onClick={() => setDrawerState(true)}>
              <ExpandLessIcon />
            </IconButton>
          </Box>
        <Box className='drawer'>
        <Drawer
          PaperProps={{sx: { height: "90%" },}}
          hideBackdrop='true'
          anchor='bottom'
          open={isOpenDrawer}
          onClose={() => {
          setDrawerState(false)
          }}
        >
        <Box className='drawer'>
          <IconButton 
          id='drawerOff'
          onClick={() => setDrawerState(false)}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>
        <Box>
          <TextField
              id='textarea'
              // value={textData}
              onChange={(e)=>{setText(e.target.value)}}
              value={text}
              inputRef={ref}
              multiline
              fullWidth
              rows={16}
              maxRows={50}
              InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                    <Tooltip title="コピー">
                      <IconButton onClick={() => CopyToClickboard(ref.current.value)}>
                        <ContentCopyIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Txtでダウンロード">
                      <IconButton onClick={() => download(ref.current.value)}>
                        <DownloadIcon />
                      </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            }}
            sx={{ width: '470px' }}
          />
        </Box>
        </Drawer>
        </Box>
      </Box>
    </>
  )
}

export default History
