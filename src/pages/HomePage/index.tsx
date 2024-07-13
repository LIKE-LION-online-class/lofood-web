import { addressAtom, coordsAtom } from '@/atom';
import { Container, Grid } from '@mui/material';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import ListCategory from './components/ListCategory';
import ListNearRestaurant from './components/ListNearRestaurant';
import ListRestaurant from './components/ListRestaurant';
import ListSlide from './components/ListSlide';
import Promo from './components/Promo';
import { useQuery } from '@tanstack/react-query';
import { getAddressHttp } from '@/api/location';

export default function Page() {
  const [coords, setCoords] = useAtom(coordsAtom);
  const [, setAddress] = useAtom(addressAtom);

  const { data, isSuccess } = useQuery({
    queryKey: ['getAddress', `${coords.latitude},${coords.longitude}`],
    queryFn: () => getAddressHttp(`${coords.latitude},${coords.longitude}`),
    enabled: !!coords.latitude && !!coords.longitude,
  });

  useEffect(() => {
    setAddress({
      formatted_address: data?.data?.results[0].formatted,
      city: data?.data?.results[0].components.city,
      country: data?.data?.results[0].components.country,
      suburb: data?.data?.results[0].components.suburb,
      residential: data?.data?.results[0].components.residential,
    });
  }, [isSuccess, data]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCoords({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} mt={2}>
        <Promo />
        <Grid item xs={12} sm={3}>
          <Grid container spacing={3}>
            <ListCategory />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={3}>
            <ListSlide />
            <ListNearRestaurant />
            <ListRestaurant />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
