import {
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
// import CreateHotelForm from "../features/CreateHotelForm";
import { useState } from "react";
// import AddHotel from "../features/AddHotel";
// import ModalLay from "../ui/ModalLay";
import CreateHotelForm from "../features/CreateHotelForm";
// import Modalv1 from "../ui/Modalv1";

function HotelOperations() {
  const [showForm, setShowForm] = useState(false);
  const close = () => setShowForm((show) => !show);
  return (
    <div style={{ display: "flex", gap: "1.6rem", alignItems: "center" }}>
      <FormControl size="small">
        <InputLabel id="ranks">SortBy</InputLabel>
        <Select
          sx={{ fontSize: "1rem", padding: "0.2rem 0.9rem" }}
          labelId="sortBy"
          id="sortBy"
          // value=""
          label="SortBy"
          // onChange={}
        >
          <MenuItem value="star 1">1 Star</MenuItem>
          <MenuItem value="star 2">2 Star</MenuItem>
          <MenuItem value="star 3">3 Star</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={close}>
        Add hotel
      </Button>
      {/* <AddHotel /> */}

      {/* <Modalv1 /> */}
      {showForm && <CreateHotelForm close={close} />}
    </div>
  );
}

export default HotelOperations;
