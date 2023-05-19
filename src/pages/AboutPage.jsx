import { Container, Grid } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the site"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
          This is your application to keep/add/store all of your required bussines 
          information to make your life conducting or handling your needs much quicker 
          and easier.  
        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}
