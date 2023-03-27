import { Box, Grid, TextField, Typography } from "@mui/material";

const EducationForm = () => {
  return (
    <Box sx={{ width: "90%", m: 1, p: 1 }}>
      <Typography variant="h6">Education Form</Typography>

      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField
            // id="outlined-company"
            label="Institute"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            // id="outlined-"
            label="Degree"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            // id="outlined-"
            label="Field of Study"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            // id="outlined-"
            label="Description"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            // id="outlined-"
            label="End month"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            // id="outlined-"
            label="End Year"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EducationForm;
