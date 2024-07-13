import { MenuItem, Select, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SmallSelect = styled(Select)({
  fontSize: '0.8rem',
  '& .MuiInputBase-input': {
    padding: '8px 16px',
  },
  borderRadius: 99,
});

function SelectLanguage() {
  const { i18n } = useTranslation();

  const handleChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <SmallSelect onChange={handleChange} value={i18n.language} defaultValue="en">
      <MenuItem value="vi">VI</MenuItem>
      <MenuItem value="en">EN</MenuItem>
      <MenuItem value="ko">KO</MenuItem>
    </SmallSelect>
  );
}

export default SelectLanguage;
