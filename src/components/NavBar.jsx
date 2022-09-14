import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DownloadIcon from '@mui/icons-material/Download'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import UploadIcon from '@mui/icons-material/Upload'
import LinkIcon from '@mui/icons-material/Link'
import { download } from '../modules/index'
import { copyURL } from '../modules/chrome'

export default function NavBar({datas,deleteStorage,output}) {
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
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={() => output(datas)}
              aria-label='download'
              aria-haspopup='true'
              color='inherit'
            >
              <UploadIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={() => download(datas)}
              size='large'
              aria-label='show more'
              aria-haspopup='true'
              color='inherit'
            >
              <DownloadIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={() => deleteStorage()}
              size='large'
              aria-label='show more'
              aria-haspopup='true'
              color='inherit'
            >
              <DeleteOutlineIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={copyURL}
              size='large'
              aria-label='show more'
              aria-haspopup='true'
              color='inherit'
            >
              <LinkIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
