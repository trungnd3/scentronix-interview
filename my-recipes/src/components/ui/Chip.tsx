import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';

type SvgIconComponent = typeof SvgIcon;

type ChipProps = {
  title: string;
  description: string;
  icon?: {
    comp: SvgIconComponent;
    size: string | number;
  };
};

export default function Chip({ title, description, icon }: ChipProps) {
  const Icon = icon?.comp;
  return (
    <Grid container sx={{ gap: '1rem' }}>
      <Box>
        {Icon && (
          <Icon sx={{ width: `${icon.size}`, height: `${icon.size}` }} />
        )}
      </Box>
      <Box>
        <Typography variant='button' sx={{ display: 'block', fontSize: 14 }}>
          {title.toUpperCase()}
        </Typography>
        <Typography variant='subtitle2' sx={{ fontSize: 18 }}>
          {description}
        </Typography>
      </Box>
    </Grid>
  );
}
