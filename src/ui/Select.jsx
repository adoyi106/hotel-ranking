import { styled } from "@mui/material";

const Select = styled("select")(({ theme }) => ({
  border: "1px solid #d1d5db",
  backgroundColor: "#fff",
  borderRadius: "5px",
  padding: "0.8rem 1.2rem",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04);",
  [theme.breakpoints.up("sm")]: {
    padding: "1rem 1.5rem",
  },
}));

export default Select;
