import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { DeckProps } from '@deck.gl/core';
import { ScatterplotLayer } from '@deck.gl/layers';
import { MapboxOverlay } from '@deck.gl/mapbox';

mapboxgl.accessToken = 'pk.eyJ1IjoiM2xlc2FuZyIsImEiOiJjbHhvN292eWgwYnZuMm1vNjY3MzZtMWxnIn0.wYFyQroipPfS2UWPkj-C5g';

import { getRestaurantsHttp } from '@/api/restaurant';
import { Avatar, Button, Popover } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useRef, useState } from 'react';
import Map, {
  GeolocateControl,
  Layer,
  LayerProps,
  MapRef,
  Marker,
  NavigationControl,
  ViewStateChangeEvent,
  useControl,
} from 'react-map-gl';
import RecipeReviewCard from './ProductCard';

const buildings3DLayer: LayerProps = {
  id: '3d-buildings',
  source: 'composite',
  'source-layer': 'building',
  filter: ['==', 'extrude', 'true'],
  type: 'fill-extrusion',
  minzoom: 14,
  paint: {
    'fill-extrusion-color': '#F8F4E1',
    'fill-extrusion-height': ['get', 'height'],
  },
};

function DeckGLOverlay(props: DeckProps) {
  const overlay = useControl<MapboxOverlay>(() => new MapboxOverlay(props));
  overlay.setProps(props);
  return null;
}

export default function AppMap() {
  const layers = [
    new ScatterplotLayer({
      id: 'deckgl-circle',
      data: [{ position: [0.45, 51.47] }],
      getPosition: (d) => d.position,
      getFillColor: [255, 0, 0, 100],
      getRadius: 1000,
      beforeId: 'waterway-label',
    }),
  ];

  const mapRef = useRef<MapRef>(null);

  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 15,
  });
  const [defaultViewport, setDefaultViewport] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 15,
  });

  const [firstLabelLayerId, setFirstLabelLayerId] = useState();
  console.log(firstLabelLayerId);
  const onMapLoad = useCallback(() => {
    if (!mapRef?.current) return;
    setFirstLabelLayerId(getFirstLabelLayerId(mapRef.current.getStyle()));
  }, []);

  const maxBounds: [number, number, number, number] = [102.14441, 8.17966, 109.46455, 23.39339];

  const onMove = useCallback(({ viewState }: ViewStateChangeEvent) => {
    setViewState(viewState);
  }, []);

  const popupRef = useRef<mapboxgl.Popup>();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    popupRef.current?.trackPointer();
  }, [popupRef.current]);

  // const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewState({
        ...viewState,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
      setDefaultViewport({
        ...viewState,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
      // dispatch(setLocation(pos.coords));
    });
  }, []);

  const { data } = useQuery({
    queryKey: ['getRestaurants'],
    queryFn: getRestaurantsHttp,
  });
  console.log(data);

  // const { results } = formatData(data);

  return (
    <Map
      ref={mapRef}
      mapLib={mapboxgl}
      {...viewState}
      onLoad={onMapLoad}
      onMove={onMove}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      pitch={40}
      bearing={20}
      maxBounds={maxBounds}
      antialias={true}
    >
      <GeolocateControl positionOptions={{ enableHighAccuracy: true }} trackUserLocation={true} />
      <DeckGLOverlay layers={layers} />
      <Layer {...buildings3DLayer} />

      <Marker
        {...defaultViewport}
        offset={[0, -20]}
        anchor="bottom"
        // popup={popup}
        // ref={markerRef}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://cdn0.iconfinder.com/data/icons/white-cat-emoticon-filled/64/cute_cat_kitten_face_avatar-27-512.png"
        />
      </Marker>

      <Marker latitude={10.801984064893402} longitude={106.64140791589209} offset={[0, -20]} anchor="bottom">
        <Button onClick={handleClick}>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/restaurant-6843937-5603506.png?f=webp"
          />
        </Button>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          sx={{ backgroundColor: 'transparent' }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <RecipeReviewCard image="https://loremflickr.com/400/200/tokyo,girl/all?random=1" />
        </Popover>
      </Marker>

      {/* {results.map((restaurant: any) => (
        <Marker latitude={restaurant?.latitude} longitude={restaurant?.longitude} offset={[0, -20]} anchor="bottom">
          <Button onClick={handleClick}>
            <Avatar
              alt="Remy Sharp"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/restaurant-6843937-5603506.png?f=webp"
            />
          </Button>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            sx={{ backgroundColor: 'transparent' }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <RecipeReviewCard
                image={restaurant?.logo ? restaurant?.logo : 'https://loremflickr.com/400/200/tokyo,girl/all?random=1'}
              />
            <Box p={1}>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <RestaurantCard item={restaurant} />
                </Link>
              </Box>
          </Popover>
        </Marker>
      ))} */}

      <NavigationControl />
    </Map>
  );
}

function getFirstLabelLayerId(style: any) {
  const layers = style.layers;
  for (let i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol') {
      return layers[i].id;
    }
  }
  return undefined;
}
