import { AppBar, Toolbar, Typography, Button, IconButton, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { Box, ThemeProvider } from '@mui/material';
const Footer = () => {

  return (
    <Box
      sx={{
        bgcolor: '#202124',
        color: 'white'
      }}
      pb={4}
      pt={4}
    // style={{
    //   position: 'fixed',
    //   bottom: 0,
    //   width: '100%'
    // }}
    >
      <Container maxWidth="lg">
        <Grid container
          direction="row"
          justifyContent="space-around"
        >
          {/* <Grid>
            <Typography variant="h6" noWrap component="h6" fontWeight="bold">
              Food Category
            </Typography>
            <List component="ul">
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Ưu Đãi
                </Link>
              </ListItem>
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Món Mới
                </Link>
              </ListItem>
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Combo 1 Người
                </Link>
              </ListItem>
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Combo Nhóm
                </Link>
              </ListItem>
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Gà Rán - Gà Quay
                </Link>
              </ListItem>
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Burger - Cơm - Mì Ý
                </Link>
              </ListItem>
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Thức Ăn Nhẹ
                </Link>
              </ListItem>
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Thức Uống & Tráng Miệng
                </Link>
              </ListItem>
            </List>
          </Grid> */}
          {/* <Grid>
            <Typography variant="h6" noWrap component="h6" fontWeight="bold">
              Về KFC
            </Typography>
            <List component="ul">
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Câu Chuyện Của Chúng Tôi
                </Link>
              </ListItem>
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Tin Khuyến Mãi
                </Link>
              </ListItem>
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Tin tức KFC
                </Link>
              </ListItem>
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Tuyển dụng
                </Link>
              </ListItem>
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Đặt tiệc Sinh nhật
                </Link>
              </ListItem>
            </List>
          </Grid> */}
          {/* <Grid>
            <Typography variant="h6" noWrap component="h6" fontWeight="bold">
              Liên hệ KFC
            </Typography>
            <List component="ul">
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Theo dõi đơn hàng
                </Link>
              </ListItem>
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Hệ Thống Nhà Hàng
                </Link>
              </ListItem>
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Liên hệ KFC
                </Link>
              </ListItem>
            </List>
          </Grid> */}
          {/* <Grid>
            <Typography variant="h6" noWrap component="h6" fontWeight="bold">
              Chính sách
            </Typography>
            <List component="ul">
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Chính sách hoạt động
                </Link>
              </ListItem>
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Chính sách và quy định
                </Link>
              </ListItem>
              <ListItem component="li" disablePadding>
                <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: '#ababab', paddingBottom: '10px' }}>
                  Chính sách bảo mật thông tin
                </Link>
              </ListItem>
            </List>
          </Grid> */}
          <Grid>
            <Typography variant="h6" noWrap component="h6" fontWeight="bold">
              Download App
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default Footer;