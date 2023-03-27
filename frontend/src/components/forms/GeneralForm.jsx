import { Box, Grid, TextField, Typography } from "@mui/material";
const GeneralForm = () => {
  return (
    <Box sx={{ width: "90%", m: 1, p: 1 }}>
      <Typography variant="h6">General Form</Typography>

      <TextField
        id="outlined-fullname"
        label="Full Name"
        variant="outlined"
        sx={{ width: "100%" }}
      />
      <Grid container spacing={1} sx={{ my: 1 }}>
        <Grid item xs={4}>
          <TextField
            id="outlined-city"
            label="City"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            id="outlined-state"
            label="State"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            id="outlined-country"
            label="Country"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
      </Grid>

      <TextField
        id="outlined-multiline-summary"
        label="Summary"
        multiline
        variant="outlined"
        maxRows={4}
        sx={{ width: "100%" }}
      />
    </Box>
  );
};

export default GeneralForm;
