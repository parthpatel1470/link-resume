import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { numericalMonthToCharConverter } from "../utils/dateUtil";
import Link from "@mui/material/Link";

const CertificationCard = ({ data }) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <div>
            <Typography variant="body" sx={{ fontWeight: 600 }}>
              {data.url ? (
                <Link
                  href={data.url}
                  underline="none"
                  color="inherit"
                  variant="body"
                  sx={{ fontWeight: 600 }}
                  target="_blank"
                >
                  {data.name}
                </Link>
              ) : (
                `${data.name}`
              )}
            </Typography>
          </div>
          <Typography variant="caption">{data.authority}</Typography>
        </Box>
        <Box>
          <div>
            <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
              {`${
                data?.ends_at
                  ? `${numericalMonthToCharConverter(data.ends_at.month)},${
                      data.ends_at.year
                    }`
                  : data?.starts_at
                  ? `${numericalMonthToCharConverter(data.starts_at.month)},${
                      data.starts_at.year
                    }`
                  : ""
              }`}
            </Typography>
          </div>
        </Box>
      </Box>
      <Typography variant="caption">
        {data?.description ? data?.description : ""}
      </Typography>
    </>
  );
};

export default CertificationCard;
