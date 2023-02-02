import React, { useCallback } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { filterEmployees } from 'modules/app/actions';
import { selectAppState } from 'modules/app/selectors';

export default function NavigationItem({ id, jobId, title}) {

  const dispatch = useDispatch();
  const appState = useSelector(selectAppState);

  const action = useCallback(() => {
    dispatch(filterEmployees(jobId))
  }, [jobId, dispatch])

  return (
    <ListItem key={id} disablePadding>
      <ListItemButton onClick={action} selected={jobId === appState.selectedJob}>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
}