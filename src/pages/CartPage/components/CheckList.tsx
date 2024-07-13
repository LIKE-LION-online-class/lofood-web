import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconTrash } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

export default function CheckboxList() {
  const { t } = useTranslation();
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', padding: 0 }} dense>
      {[0].map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <IconTrash size={16} />
              </IconButton>
            }
            disablePadding
          >
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRipple inputProps={{ 'aria-labelledby': labelId }} />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${t('itemsInCart')}`} />
            <ListItemText id={labelId} primary={t('unitPrice')} />
            <ListItemText id={labelId} primary={t('quantity')} />
            <ListItemText id={labelId} primary={t('totalPrice')} />
          </ListItem>
        );
      })}
    </List>
  );
}
