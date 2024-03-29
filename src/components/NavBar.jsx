import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import LinkIcon from '@mui/icons-material/Link'
import { copyURL } from '../modules/chrome'
import { download } from '../modules/index'
import Tooltip from '@mui/material/Tooltip'
// import UploadIcon from '@mui/icons-material/Upload'
import DownloadIcon from '@mui/icons-material/Download'
export default function NavBar({ datas, deleteStorage, output }) {
  return (
    <Box sx={{ flexGrow: 1, padding: 0 }}>
      <AppBar position='static'>
        <Toolbar sx={{ bgcolor: 'rgb(92 65 45)' }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/32.png`}
            alt='ClipRoach-logo'
          />
          <Typography variant='h6' noWrap component='div' sx={{ ml: 1 }}>
            Clip-Roach
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* 右の点マークの中で縦並びにしたいものを記述 */}
          </Box>
          {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Tooltip title='アウトプット'>
              <IconButton
                onClick={() => output(datas)}
                aria-label='download'
                aria-haspopup='true'
                color='inherit'
              >
                <UploadIcon />
              </IconButton>
            </Tooltip>
          </Box> */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Tooltip title='ダウンロード'>
              <IconButton
                onClick={() => download(datas)}
                size='large'
                aria-label='show more'
                aria-haspopup='true'
                color='inherit'
              >
                <DownloadIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Tooltip title='全削除'>
              <IconButton
                onClick={() => deleteStorage()}
                size='large'
                aria-label='show more'
                aria-haspopup='true'
                color='inherit'
              >
                <DeleteOutlineIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Tooltip title='URLコピー'>
              <IconButton
                onClick={copyURL}
                size='large'
                aria-label='show more'
                aria-haspopup='true'
                color='inherit'
              >
                <LinkIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
