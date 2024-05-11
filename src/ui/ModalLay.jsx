import { Box, Button, Modal } from "@mui/material";
import { HiMiniXMark } from "react-icons/hi2";
import CreateHotelForm from "../features/CreateHotelForm";

const style = {
  //   position: "fixed",
  //   top: "0",
  //   left: "0",
  //   width: "100%",
  //   height: "100vh",
  //   backgroundColor: "#ffffff19",
  //   backdropFilter: "blur(4px)",
  //   zIndex: "1000",
  //   transition: "all 0.5s",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};
// style
// const style = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundColor: "#fff",
//   borderRadius: "9px",
//   boxShadow: "0 2.4rem 3.2rem rgba(0, 0, 0, 0.12)",
//   padding: "3.2rem 4rem",
//   transition: "all 0.5s",
// };
function ModalLay() {
  return (
    // <div
    //   style={{
    //     position: "fixed",
    //     top: "0",
    //     left: "0",
    //     width: "100%",
    //     height: "100vh",
    //     backgroundColor: "#ffffff19",
    //     backdropFilter: "blur(4px)",
    //     zIndex: "1000",
    //     transition: "all 0.5s",
    //   }}
    // >
    <div>
      <Modal>
        <Box sx={style}>
          <Button>
            <HiMiniXMark />
          </Button>
          <CreateHotelForm />
        </Box>
      </Modal>
    </div>
  );
}

export default ModalLay;
