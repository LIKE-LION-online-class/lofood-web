import AppMap from '@/components/Map';
import RecipeReviewCard from '@/components/ProductCard';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Popover,
  useMediaQuery,
  useTheme,
  Rating,
  Stack,
  Typography
} from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import StarsIcon from '@mui/icons-material/Stars';

import Slider, { Settings } from 'react-slick';

import { useState, useRef, useMemo } from 'react';
import { getRestaurantsHttp } from '@/apis/restaurant';
import { useQuery } from '@tanstack/react-query';
import { formatData } from '@/libs';
import SearchInput from '@/components/SearchInput';

export default function Search() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  var settings: Settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    // variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  if (isMobile) {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
      >
        <Box height={100} width={100}>
          <img
            src="https://cdn-icons-png.freepik.com/512/10255/10255440.png"
            alt="Mobile App"
            style={{ height: '100%', width: '100%' }}
          />
        </Box>

        <Typography variant="h5">Not support</Typography>
        <Typography variant="caption">Please use desktop</Typography>
      </Grid>
    );
  }
  ///
  const { data } = useQuery({
    queryKey: ['getRestaurants'],
    queryFn: getRestaurantsHttp,
  });

  const { results } = formatData(data);
  const [searchText, setSearchText] = useState<string>('');
  const searchRef = useRef<any>(null);// dont know what is typeof
  const handleSearchText = (value: string) => {
    console.log(value, 'aaaa');
    clearTimeout(searchRef.current!);
    searchRef.current = setTimeout(() => {
      setSearchText(value);
    }, 1000);

  }
  const searchValues: object = useMemo(() => {
    return results.filter(item => item.address?.toUpperCase().indexOf(searchText.toUpperCase()) !== -1);
  }, [searchText]);

  ////
  return (
    <Container sx={{ height: '100%' }} maxWidth={false} disableGutters>
      <Grid container spacing={0} height="100%" width="100%">
        {/* <Grid item xs={2} height="100%" bgcolor="white">
          <Box sx={{ height: '92vh', overflowY: 'auto', overflowX: 'hidden' }}>
            <List>
              {cardData.map((card, index) => (
                <CardItem key={index} title={card.title} description={card.description} />
              ))}
            </List>
            <SearchInput />
          </Box>
        </Grid> */}
        <Grid item xs={12} position="relative">
          <Box position="absolute" top={8} left={2} zIndex={99}>
            <Stack direction="row" spacing={1} paddingLeft={2}>
              <SearchInput placeholder="Enter Search!" width='0px' height="50px" onChange={handleSearchText} />
              {/* <Button
                variant="contained"
                sx={{
                  borderRadius: 99,
                  textTransform: 'none',
                  backgroundColor: 'white',
                  color: 'black',
                  '&:hover': { backgroundColor: 'white' },
                }}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>

              <Button
                variant="contained"
                sx={{
                  borderRadius: 99,
                  textTransform: 'none',
                  backgroundColor: 'white',
                  color: 'black',
                  '&:hover': { backgroundColor: 'white' },
                }}
                startIcon={<ExploreIcon />}
              >
                Near by
              </Button>
              <Button
                aria-describedby={id}
                variant="contained"
                startIcon={<StarsIcon color="warning" />}
                onClick={handleClick}
                sx={{
                  borderRadius: 99,
                  textTransform: 'none',
                  backgroundColor: 'white',
                  color: 'black',
                  '&:hover': { backgroundColor: 'white' },
                }}
              >
                Ratings
              </Button> */}
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Box p={2}>
                  <FormGroup>
                    <Stack direction="row" spacing={5} alignItems="center">
                      <Rating defaultValue={1} readOnly />
                      <FormControlLabel control={<Checkbox defaultChecked />} label="" />
                    </Stack>
                    <Stack direction="row" spacing={5} alignItems="center">
                      <Rating defaultValue={2} readOnly />
                      <FormControlLabel control={<Checkbox defaultChecked />} label="" />
                    </Stack>

                    <Stack direction="row" spacing={5} alignItems="center">
                      <Rating defaultValue={3} readOnly />
                      <FormControlLabel control={<Checkbox defaultChecked />} label="" />
                    </Stack>
                    <Stack direction="row" spacing={5} alignItems="center">
                      <Rating defaultValue={4} readOnly />
                      <FormControlLabel control={<Checkbox defaultChecked />} label="" />
                    </Stack>
                    <Stack direction="row" spacing={5} alignItems="center">
                      <Rating defaultValue={5} readOnly />
                      <FormControlLabel control={<Checkbox defaultChecked />} label="" />
                    </Stack>
                  </FormGroup>
                </Box>
              </Popover>
            </Stack>
          </Box>

          {/* <Box position="absolute" bottom={8} left="50%" zIndex={99} sx={{ transform: 'translate(-50%, 0)' }}>
            <Box maxWidth={1000}>
              <Slider {...settings}>
                <RecipeReviewCard image="https://loremflickr.com/400/200/tokyo,girl/all?random=1" />
                <RecipeReviewCard image="https://loremflickr.com/400/200/tokyo,girl/all?random=2" />
                <RecipeReviewCard image="https://loremflickr.com/400/200/tokyo,girl/all?random=3" />
                <RecipeReviewCard image="https://loremflickr.com/400/200/tokyo,girl/all?random=4" />
                <RecipeReviewCard image="https://loremflickr.com/400/200/tokyo,girl/all?random=5" />
              </Slider>
            </Box>
          </Box> */}
          <AppMap dataRetaurant={searchText ? searchValues : results || [].filter(i => {
            let { description, latitute, longitute } = i
            const filterLookUp = [description, latitute, longitute, ...address]
            return filterLookUp;
          })} />

        </Grid>
      </Grid>
    </Container>
  );
}
