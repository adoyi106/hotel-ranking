import PropTypes from "prop-types";
import { styled } from "@mui/system";
// import { useMediaQuery, useTheme } from "@mui/material";

const StyledFormRow = styled("div")(({ theme }) => ({
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "1fr",
  gap: "1.2rem",
  padding: "1.2rem 0",
  "&:not(:last-child)": {
    borderBottom: "1px solid #f3f4f6",
  },
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "24rem 1fr 1.2fr",
    gap: "2.4rem",
    padding: "1.2rem 0",
    "&:first-child": {
      paddingTop: 0,
    },
    "&:last-child": {
      paddingBottom: 0,
    },
    "&:has(button)": {
      display: "flex",
      justifyContent: "flex-end",
      gap: "1.2rem",
    },
  },

  "@media (max-width: 600px)": {
    padding: "1rem",
    "&:has(button)": {
      gap: "0.5rem",
    },
  },
}));

const Label = styled("label")({
  fontWeight: 500,
});

const Error = styled("span")({
  fontSize: "1.4rem",
  color: "var(--color-red-700)",
});

function FormRow({ children, error, label }) {
  //   const theme = useTheme();
  //   const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

FormRow.propTypes = {
  children: PropTypes.any,
  error: PropTypes.string,
  label: PropTypes.string,
};

export default FormRow;
