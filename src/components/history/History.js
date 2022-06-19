import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CopyToClickboard from '../Clipboard/Clipboard';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function History(props) {
  console.log(props);
  const [checked, setChecked] = React.useState([0]);

  const datas = props.datas
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  return (
    <>
    <Box
      sx={{
        maxHeight:'60vmx',
        minHeight:'50vmx',
        margin:'.6rem'
      }}
    >
      {datas.map((value,index) =>(
        <List sx={{padding:"5px",margin:"4px", dense:true, display:"flex", flexDirection:"row"}} >
          <ListItem
            key={index}
            disablePadding
            sx={{paddingTop:'5px'}}
          >
            {/* <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': index }}
                />
                  </ListItemIcon>
                  <ListItemText id={index} primary={value} sx={{}}/>
              </ListItemButton> */}
                <ListItemIcon >
                  <KeyboardArrowRightIcon />
                </ListItemIcon>
                <ListItemText id={index} primary={value}/>
                <IconButton onClick={() => CopyToClickboard(value)}>
                    <ContentCopyIcon />
                  </IconButton>
                  <IconButton onClick={() => {props.deleteContent(index)}}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
        </List>
      
      ))}
    </Box>
    <Box
      sx={{
        minHeight:'30vmx',
        margin:'1rem',
        width:'100%',
        
      }}
    >
      <TextField
        id="outlined-textarea"
        value={props.textData}
        multiline
        fullWidth
        rows={3}
        maxRows={10}
        InputProps={{
          endAdornment: <InputAdornment position="end"><IconButton onClick={() => CopyToClickboard(props.textData)}>
          <ContentCopyIcon />
        </IconButton ></InputAdornment>,
        }}
        sx={{width:'470px'}}
      />
    </Box>
    </>
  );
};

export default History;