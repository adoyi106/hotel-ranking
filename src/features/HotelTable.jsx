import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
// import { useState } from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { deleteHotel, editHotel } from "./hotelSlice";
import { useSearchParams } from "react-router-dom";

// const rows = [
//   {
//     id: 1,
//     name: "Adoyi",
//     address: "makurdi",
//     country: "Nigeria",
//     star: 3,
//   },
//   {
//     id: 2,
//     name: "Obekpa",
//     address: "Abuja",
//     country: "Nigeria",
//     star: 3,
//   },
// ];

//eslint-disable-next-line
function HotelTable() {
  const { hotels } = useSelector((state) => state.hotels);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  //   function handleDelete() {
  //     dispatch(deleteHotel());
  const filterValue = searchParams.get("soryBy");
  console.log(filterValue);
  //   }
  return (
    <TableContainer
      component={Paper}
      sx={{ margin: "2rem", border: "1px solid #e5e7eb", overflow: "scroll" }}
      maxWidth="xl"
    >
      <Table>
        <TableHead
          sx={{
            background: "#f9fafb",
            fontWeight: "600",
            letterSpacing: "0.4px",
            textTransform: "uppercase",
          }}
        >
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Star</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => ( */}
          {hotels.map((hotel) => (
            <TableRow
              key={hotel.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell aria-label="name" component="th" scope="row">
                {hotel.name}
              </TableCell>
              <TableCell aria-label="address" sx={{ color: " #15803d" }}>
                {hotel.address}
              </TableCell>
              <TableCell aria-label="country">{hotel.country}</TableCell>
              <TableCell aria-label="rating">{hotel.rating}</TableCell>
              <TableCell>
                <Button onClick={() => dispatch(editHotel(hotel.id))}>
                  <HiPencil />
                </Button>
                <Button onClick={() => dispatch(deleteHotel(hotel.id))}>
                  <HiTrash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default HotelTable;
