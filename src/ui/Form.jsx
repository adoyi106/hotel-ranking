import PropTypes from "prop-types";
import { styled } from "@mui/system";

const Form = styled("form")(
  {
    padding: "2.4rem 4rem",
    backgroundColor: "#f9fafb",
    border: "1px solid #f3f4f6",
    borderRadius: "5px",
    fontSize: "1.4rem",
    overflow: "hidden",
    // overflow: "sc",
  },
  ({ type }) => ({
    width: type === "modal" ? "80rem" : "auto",
  }),
  {
    "@media (max-width: 600px)": {
      padding: "0rem",
    },
  }
);

// Form.defaultProps = {
//   type: "regular",
// };

Form.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["regular", "modal"]),
};

export default Form;
