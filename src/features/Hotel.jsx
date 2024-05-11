import { Typography } from "@mui/material";
import HotelOperations from "../utils/HotelOperations";
import HotelTable from "./HotelTable";

function Hotel() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
            },
          }}
        >
          All hotels
        </Typography>
        <HotelOperations />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <HotelTable />
      </div>
    </>
  );
}

export default Hotel;
