import React from 'react';
import Card from "./Card";
import Grid from '@mui/material/Grid';

function Dashboard() {
  return (
    <>
      <div>Dashboard</div>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <Card />
        </Grid><Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <Card />
        </Grid><Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <Card />
        </Grid><Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <Card />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
