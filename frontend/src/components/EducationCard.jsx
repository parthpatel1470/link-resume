import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { numericalMonthToCharConverter } from "../utils/dateUtil";

const EducationCard = ({ data }) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <div>
            <Typography variant="body" sx={{ fontWeight: 600 }}>
              {data.school}
            </Typography>
          </div>
          <Typography variant="caption">
            {data.degree_name} {data.field_of_study}
          </Typography>
        </Box>
        <Box>
          <div>
            <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
              {`${
                data?.ends_at
                  ? `${numericalMonthToCharConverter(data.ends_at.month)},${
                      data.ends_at.year
                    }`
                  : "Present"
              }`}
            </Typography>
          </div>
          <Typography variant="caption">{data.location}</Typography>
        </Box>
      </Box>
      <Typography variant="caption">
        {data?.description ? data?.description : ""}
      </Typography>
    </>
  );
};

export default EducationCard;
