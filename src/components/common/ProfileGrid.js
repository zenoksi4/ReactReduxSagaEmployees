import { CircularProgress, Grid, List, ListItem, Stack } from '@mui/material';
import React from 'react';
import ProfileCard from 'components/common/ProfileCard'




export default function ProfileGrid({profiles = [], loading}) {


  if (loading || !profiles) {
    return (
      <Grid container justifyContent='center'>
        <CircularProgress />
      </Grid>
    )
  }

  return (
    <List sx={{ display: 'flex', bgcolor: 'background.paper', flexWrap: 'wrap' }}>
      {profiles
        .map(profile => (
            <>
                <ListItem sx={{flexBasis: { sm: '100%', md:'50%', xl: '33.33%'}}} key={profile.id}>
                    <ProfileCard src={profile.avatar} title={profile.name} subSpecialties={profile.job}/>
                </ListItem>
            </>
        ))}

    </List>
  )
}