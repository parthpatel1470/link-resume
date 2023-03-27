import {
  Box,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Chip,
  Autocomplete,
} from "@mui/material";
import { useEffect, useState } from "react";

const initSkills = [
  "Git",
  "PostgreSQL",
  "Vuex",
  "Vue.js",
  "Django REST Framework",
  "JavaScript",
  "React.js",
  "Quasar Framework",
  "MongoDB",
  "Python (Programming Language)",
  "Node.js",
  "Django",
  "GraphQL",
  "HTML",
  "Cascading Style Sheets (CSS)",
  "PHP",
  "Java",
  "C (Programming Language)",
  "SQL",
  "Microsoft Office",
];

const formattedSkills = initSkills.map((skill) => {
  return { label: skill, value: skill };
});

const SkillForm = () => {
  const [skills, setSkills] = useState("");

  const handleChange = (value) => {
    console.log(value);

    setSkills(value);
  };

  useEffect(() => {
    console.log(skills);
  }, [skills]);

  return (
    <Box sx={{ width: "90%", m: 1, p: 1 }}>
      <Typography variant="h6">Skill Form</Typography>

      {/* <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={skills}
        //   onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Skills" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value, index) => (
                <Chip
                  key={value}
                  label={value}
                  onDelete={() => handleDelete(index)}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {skills.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}

      <Autocomplete
        multiple
        id="tags-standard"
        options={initSkills}
        // defaultValue={[skills]}
        // getOptionLabel={(option) => option.label}
        // inputValue={skills}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Skills"
            placeholder="Skills"
          />
        )}
        freeSolo
        onChange={(e, v) => handleChange(v)}
      />
    </Box>
  );
};

export default SkillForm;
