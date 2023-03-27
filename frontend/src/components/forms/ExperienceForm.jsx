import { Box, Grid, TextField, Typography } from "@mui/material";

const initData = [{}, {}, {}];

const ExperienceForm = () => {
  return (
    <Box sx={{ width: "90%", m: 1, p: 1 }}>
      <Typography variant="h6">Experience Form</Typography>

      {initData.map((ele, index) => (
        <Grid container spacing={1} sx={{ my: 1 }} key={index}>
          <Grid item xs={6}>
            <TextField
              // id="outlined-company"
              label="Company"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              // id="outlined-state"
              label="Title"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <TextField
                  // id="outlined-state"
                  label="Start Month"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  // id="outlined-state"
                  label="Start Year"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  // id="outlined-state"
                  label="End Month"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  // id="outlined-state"
                  label="End Year"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Summary job"
              variant="outlined"
              sx={{ width: "100%" }}
              multiline
              maxRows={4}
            />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default ExperienceForm;
