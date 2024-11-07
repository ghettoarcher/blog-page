import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';



const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
  ? 'rgba(0, 0, 0, 1)' // Полный черный цвет с использованием `theme.vars`
  : '#000',             // Полный черный цвет, если `theme.vars` не используется

  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap:'20px' }}>
              <Button variant="text" color="inherit" size="small" sx={{ minWidth: 0 }}>
                News
              </Button>
              <Button variant="text" color="inherit" size="small" sx={{ minWidth: 0 }}>
                Science
              </Button>
              <Button variant="text" color="inherit" size="small" sx={{ minWidth: 0 }}>
                Life
              </Button>
              <Button variant="text" color="inherit" size="small" sx={{ minWidth: 0 }}>
                Travel
              </Button>
              <Button variant="text" color="inherit" size="small" sx={{ minWidth: 0 }}>
                Money
              </Button>
              <Button variant="text" color="inherit" size="small" sx={{ minWidth: 0 }}>
                Sport
              </Button>
              <Button variant="text" color="inherit" size="small" sx={{ minWidth: 0 }}>
                People
              </Button>
              <Button variant="text" color="inherit" size="small" sx={{ minWidth: 0 }}>
                Health
              </Button>
              <Button variant="text" color="inherit" size="small" sx={{ minWidth: 0 }}>
                Sport
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
             <Button sx={{ backgroundColor: 'transparent', color: 'white', '&:hover': { backgroundColor: 'grey' } }}>
              Sign in
            </Button>
            <Button sx={{ backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: 'grey' } }}>
              Sign up
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem>Features</MenuItem>
                <MenuItem>Testimonials</MenuItem>
                <MenuItem>Highlights</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Blog</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                <Link to={'/sign-in'}>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </Link>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
