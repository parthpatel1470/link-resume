import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SectionBox = ({ title, list, Component }) => {
  return (
    <Box paddingY={1}>
      <Typography variant="subtitle1">{title}</Typography>
      <hr />
      {list.map((data, index) => (
        <Component data={data} key={index} />
      ))}
    </Box>
  );
};

export default SectionBox;
