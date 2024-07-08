import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';


interface valuePassword {
    id: string,
    name: string,
    value: string,
    onChange: void,
    toggleLabel: Boolean,
    disabled: Boolean
}



export default function CustomPassword({ id, name, value, onChange, toggleLabel, disabled }: valuePassword) {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    console.log(typeof disable, 'disable');
    return (
        <FormControl sx={{ width: '100%', background: 'none' }} className={toggleLabel ? 'FeilhasLabel' : 'FielnoLabel'}>
            {
                toggleLabel ? <InputLabel htmlFor="filled-adornment-password" className='labelPassword'>Password</InputLabel> : ''
            }
            <FilledInput
                disabled={disabled}
                label="password"
                fullWidth
                required
                type={showPassword ? 'text' : 'password'}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}