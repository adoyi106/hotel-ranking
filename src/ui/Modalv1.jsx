import { createPortal } from "react-dom";
// import { useOutsideClicks } from "../hooks/useOutsideClicks";
// import styled from "styled-components";
import { Button, Modal as MuiModal } from "@mui/material";
import { HiMiniXMark } from "react-icons/hi2";
import { cloneElement } from "react";

// const styledModal = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",

// .MuiPaper-root {
//   backgroundColor: "#fff",
//   borderRadius: "9px",
//   boxShadow: "0 2.4rem 3.2rem rgba(0, 0, 0, 0.12)",
//   padding: "3.2rem 4rem",
//   transition: "all 0.5s",
//   // }
// };

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: rgba(255, 255, 255, 0.1);
//   backdrop-filter: blur(4px);
//   z-index: 1000;
//   transition: all 0.5s;
// `;

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  borderRadius: "9px",
  boxShadow: "0 2.4rem 3.2rem rgba(0, 0, 0, 0.12)",
  padding: "3.2rem 4rem",
  transition: "all 0.5s",
};
// const ModalContext = createContext();

// // eslint-disable-next-line
// function Modal({ children }) {
//   const [openName, setOpenName] = useState("");
//   const close = () => setOpenName("");
//   const open = setOpenName;

//   return (
//     <ModalContext.Provider value={{ openName, close, open }}>
//       {children}
//     </ModalContext.Provider>
//   );
// }

// function Open({ children, opens: opensWindowName }) {
//   const { open } = useContext(ModalContext);

//   return cloneElement(children, { onClick: () => open(opensWindowName) });
// }

// eslint-disable-next-line
// function Window({ children, name }) {
//   const { openName, close } = useContext(ModalContext);

// const { ref } = useOutsideClicks(close);

//   if (name !== openName) return null;

// }

//eslint-disable-next-line
function Modalv1({ children }) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
        backgroundColor: "#ffffff19",
        backdropFilter: "blur(4px)",
        zIndex: "1000",
        transition: "all 0.5s",
      }}
    >
      {/* <StyledModal ref={ref}> */}
      <MuiModal sx={style}>
        <Button onClick={close}>
          <HiMiniXMark />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </MuiModal>
    </div>,
    document.body
  );
}

export default Modalv1;
