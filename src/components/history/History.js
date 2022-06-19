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
                <Checkbox
                  edge="start"
                  // checked={checked.indexOf(value) !== -1}
                  // tabIndex={-1}
                  // disableRipple
                  // inputProps={{ 'aria-labelledby': index }}
                />
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
      <TextField
        id="outlined-textarea"
        label="test"
        placeholder="testです"
        multiline
        fullWidth
      />
    </>
  );
};

export default History;