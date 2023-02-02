import React from 'react';
import { selectApiState } from 'modules/api/selectors';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function NavigationItem({ id, jobId, title}) {

  return (
    <ListItem key={id}>
      <ListItemText primary={title} />
    </ListItem>
  );
}