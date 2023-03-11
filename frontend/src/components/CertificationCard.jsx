import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { numericalMonthToCharConverter } from "../utils/dateUtil";
import Link from "@mui/material/Link";

const CertificationCard = ({ certifcation }) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <div>
            <Typography variant="body" sx={{ fontWeight: 600 }}>
              {certifcation.url ? (
                <Link
                  href={certifcation.url}
                  underline="none"
                  color="inherit"
                  variant="body"
                  sx={{ fontWeight: 600 }}
                  target="_blank"
                >
                  {certifcation.name}
                </Link>
              ) : (
                `${certifcation.name}`
              )}
            </Typography>
          </div>
          <Typography variant="caption">{certifcation.authority}</Typography>
        </Box>
        <Box>
          <div>
            <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
              {`${
                certifcation?.ends_at
                  ? `${numericalMonthToCharConverter(
                      certifcation.ends_at.month
                    )},${certifcation.ends_at.year}`
                  : certifcation?.starts_at
                  ? `${numericalMonthToCharConverter(
                      certifcation.starts_at.month
                    )},${certifcation.starts_at.year}`
                  : ""
              }`}
            </Typography>
          </div>
        </Box>
      </Box>
      <Typography variant="caption">
        {certifcation?.description ? certifcation?.description : ""}
      </Typography>
    </>
  );
};

export default CertificationCard;
