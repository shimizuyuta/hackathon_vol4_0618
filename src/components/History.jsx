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

function History({datas,textData}) {
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
                <IconButton onClick={() => CopyToClickboard(value)}>
                  <ContentCopyIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    deleteContent(index)
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
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
          multiline
          fullWidth
          rows={3}
          maxRows={10}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => CopyToClickboard(textData)}>
                  <ContentCopyIcon />
                </IconButton>
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
