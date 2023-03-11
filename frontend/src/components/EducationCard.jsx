import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { numericalMonthToCharConverter } from "../utils/dateUtil";

const EducationCard = ({ education }) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <div>
            <Typography variant="body" sx={{ fontWeight: 600 }}>
              {education.school}
            </Typography>
          </div>
          <Typography variant="caption">
            {education.degree_name} {education.field_of_study}
          </Typography>
        </Box>
        <Box>
          <div>
            <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
              {`${
                education?.ends_at
                  ? `${numericalMonthToCharConverter(
                      education.ends_at.month
                    )},${education.ends_at.year}`
                  : "Present"
              }`}
            </Typography>
          </div>
          <Typography variant="caption">{education.location}</Typography>
        </Box>
      </Box>
      <Typography variant="caption">
        {education?.description ? education?.description : ""}
      </Typography>
    </>
  );
};

export default EducationCard;
