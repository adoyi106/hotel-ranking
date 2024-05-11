import { Button } from "@mui/material";
import Modal from "../ui/Modal";
import CreateHotelForm from "./CreateHotelForm";

function AddHotel() {
  return (
    <Modal>
      <Modal.Open opens="hotel-form">
        <Button>Add Hotel</Button>
      </Modal.Open>
      <Modal.Window name="hotel-form">
        <CreateHotelForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddHotel;
