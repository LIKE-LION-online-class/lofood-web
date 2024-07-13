import { Box, Card, CardContent, Grid, IconButton, Stack, styled } from '@mui/material';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useRef } from 'react';
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
    slidesToShow: 2,
    slidesToScroll: 2,
  };

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
            <Box p={1}>
              <Box
                height={200}
                bgcolor="primary.main"
                borderRadius={2}
                sx={{
                  backgroundImage:
                    'url(https://salt.tikicdn.com/cache/w750/ts/tikimsp/f6/ee/67/3f24bac5673e718ab1d06e3347bb65ce.png.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Box>

            <Box p={1}>
              <Box
                height={200}
                borderRadius={2}
                bgcolor="primary.main"
                sx={{
                  backgroundImage:
                    'url(https://salt.tikicdn.com/cache/w750/ts/tikimsp/43/09/ba/457624db3a9834d8f3ac7913527d2866.png.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Box>
            <Box p={1}>
              <Box
                height={200}
                borderRadius={2}
                bgcolor="primary.main"
                sx={{
                  backgroundImage:
                    'url(https://salt.tikicdn.com/cache/w750/ts/tikimsp/c8/5d/0b/4d947c862d9d5c567e3a2dc59f9d4213.jpg.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Box>
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
