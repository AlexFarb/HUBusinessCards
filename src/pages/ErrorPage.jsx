import React from "react";

export default function ErrorPage() {
  return  <div>
  <Box
    sx={{
      width: "70%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 2,
      m: "0 auto",
      lineHeight: "2",
    }}
  >
    <PageHeader title="Error 404" subtitle="Page not found" />

    <Grid container spacing={0}>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography variant="h5" color="initial">
            Oops... There was a problem with the URL, Go back.
          </Typography>
          
        </Box>
      </Grid>
    </Grid>
  </Box>
</div>
}
