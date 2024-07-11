import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { AppContext } from '../context/AppContext.tsx';

type Props = {
  placeholder: string;
  value?: string;
  width?: string;
  height?: string;
  onChange?: (value: string) => void;
}
export default function CustomizedInputBase({
  width = "0px",
  height = '20px',
  onChange,
  ...props
}: Props) {

  const { isOpen, toogleSideBar } = useContext(AppContext);

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      <IconButton className='icon-search' type="button" sx={{ p: '10px' }} aria-label="search" onClick={toogleSideBar}>
        <SearchIcon />
      </IconButton>
      <InputBase
        className='file-input'
        {...props}
        style={{ width, height }}
        onChange={e => onChange && onChange(e.target.value)}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}