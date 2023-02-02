import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { blueGrey } from '@mui/material/colors';


export default function RecipeReviewCard({src, title, subSpecialties}) {

  return (
    <Card sx={{ display: 'flex', padding: '4px 24px', width: '100%'}}>

      <CardHeader
        avatar={
          <Avatar src={src} alt={title} sx={{ bgcolor: blueGrey[500], display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="recipe" />
        }
        title={title}
        subheader={(subSpecialties && subSpecialties.length > 0) ? subSpecialties : '-'}
      />
    </Card>
  );
}
