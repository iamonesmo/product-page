import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Container } from "@mui/material";

function Body() {
  return (
    <Container>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Typography>1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Typography>2</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Body;
