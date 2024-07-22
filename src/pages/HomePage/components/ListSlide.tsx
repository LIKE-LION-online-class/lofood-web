import { getFoodHttp } from '@/api/food';
import { Box, Card, CardContent, Grid, IconButton, Stack, styled } from '@mui/material';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slick, { Settings } from 'react-slick';

const StyledIconButton = styled(IconButton)(() => ({
  backgroundColor: 'white',
  color: 'black',
}));

function ListSlide() {
  const setttings: Settings = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  const { data } = useQuery({
    queryKey: ['getFoods'],
    queryFn: getFoodHttp,
  });

  console.log(data);
  let sliderRef = useRef<Slick>(null);

  const handleNext = () => {
    sliderRef?.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef?.current?.slickPrev();
  };

  return (
    <Grid item xs={12}>
      <Card
        elevation={0}
        sx={{
          position: 'relative',
        }}
      >
        <CardContent>
          <Slick {...setttings} ref={sliderRef}>
            {data?.data?.map((item: any) => (
              <Box p={1} key={item?.id} component={Link} to={`/food/${item?.id}`}>
                <Box
                  height={200}
                  bgcolor="primary.main"
                  borderRadius={2}
                  sx={{
                    backgroundImage: `url(${item?.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </Box>
            ))}
          </Slick>

          <Stack direction="row" justifyContent="center" spacing={1}>
            <Box height={2} width={20} bgcolor="blue" borderRadius={99} />
            <Box height={2} width={20} bgcolor="gray" borderRadius={99} />
            <Box height={2} width={20} bgcolor="gray" borderRadius={99} />
          </Stack>
        </CardContent>

        <Box
          position="absolute"
          left={4}
          bottom="50%"
          sx={{
            transform: 'translateY(50%)',
          }}
        >
          <StyledIconButton onClick={handlePrev}>
            <IconArrowLeft />
          </StyledIconButton>
        </Box>
        <Box
          position="absolute"
          right={4}
          bottom="50%"
          sx={{
            transform: 'translateY(50%)',
          }}
        >
          <StyledIconButton onClick={handleNext}>
            <IconArrowRight />
          </StyledIconButton>
        </Box>
      </Card>
    </Grid>
  );
}

export default ListSlide;
