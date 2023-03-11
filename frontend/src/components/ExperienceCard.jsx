import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { numericalMonthToCharConverter } from "../utils/dateUtil";

const ExperienceCard = ({ experience }) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <div>
            <Typography variant="body" sx={{ fontWeight: 600 }}>
              {experience.company}
            </Typography>
          </div>
          <Typography variant="caption">{experience.title}</Typography>
        </Box>
        <Box>
          <div>
            <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
              {`${numericalMonthToCharConverter(experience.starts_at.month)},${
                experience.starts_at.year
              } - ${
                experience?.ends_at
                  ? `${numericalMonthToCharConverter(
                      experience.ends_at.month
                    )},${experience.ends_at.year}`
                  : "Present"
              }`}
            </Typography>
          </div>
          <Typography variant="caption">{experience.location}</Typography>
        </Box>
      </Box>
      <Typography variant="caption">
        {experience?.description ? experience?.description : ""}
      </Typography>
    </>
  );
};

export default ExperienceCard;
