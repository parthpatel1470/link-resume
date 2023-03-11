import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import grey from "@mui/material/colors/grey";
import Icon from "@mui/material/Icon";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/edit-resume");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
      <Box
        sx={{
          backgroundColor: grey[200],
          borderRadius: 10,
          padding: 6,
        }}
      >
        <Typography variant="h4" padding={1}>
          Link Resume
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl variant="outlined" sx={{ padding: 1 }}>
            <InputLabel htmlFor="outlined-linkedin-url">
              LinkedIn Url
            </InputLabel>
            <OutlinedInput
              id="outlined-linkedin-url"
              variant="outlined"
              placeholder="Eg: https://www.linkedin.com/in/parth-patel-1100b9180/"
              size="small"
              startAdornment={
                <Icon aria-label="toggle password visibility">
                  <LinkedInIcon />
                </Icon>
              }
              label="LinkedIn Url"
            />
          </FormControl>
          <Box padding={1}>
            <Button variant="contained" type="submit">
              Generate Resume
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Home;
