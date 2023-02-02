import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from '@mui/material';

export default function NavigationItem({ id, jobId, title}) {

  return (
    <ListItem key={id} disablePadding>
      <ListItemButton>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
}