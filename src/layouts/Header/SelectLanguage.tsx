import { MenuItem, Select, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SmallSelect = styled(Select)({
  fontSize: '0.8rem',
  borderRadius: 99,
  '& .MuiInputBase-input': {
    padding: '8px 16px',
  },
});

function SelectLanguage() {
  const { i18n } = useTranslation();

  const handleChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <SmallSelect
      onChange={handleChange}
      value={i18n.language}
      defaultValue="en"
      MenuProps={{ MenuListProps: { disablePadding: true } }}
    >
      <MenuItem value="vi">VI</MenuItem>
      <MenuItem value="en">EN</MenuItem>
      <MenuItem value="ko">KO</MenuItem>
    </SmallSelect>
  );
}

export default SelectLanguage;
