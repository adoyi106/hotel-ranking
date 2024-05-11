import { useForm } from "react-hook-form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import { Button } from "@mui/material";
import Form from "../ui/Form";
import { HiMiniXMark } from "react-icons/hi2";

import { useEffect } from "react";
import { useState } from "react";
import Select from "../ui/Select";
import { useDispatch } from "react-redux";
import { addHotel, editHotel } from "./hotelSlice";
import { v4 } from "uuid";

//eslint-disable-next-line
function CreateHotelForm({ close, hotel }) {
  const dispatch = useDispatch();
  const { register, setValue, handleSubmit, formState } = useForm();
  const { errors } = formState;
  //store the countries that will be gotten from the api
  const [countries, setCountries] = useState([]);
  //   get countries
  useEffect(function () {
    async function fetchCountries() {
      try {
        const res = await fetch(
          "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
        );
        const data = await res.json();

        const uniqueCountries = [...new Set(data.map((city) => city.country))];
        setCountries(uniqueCountries);
        // console.log(countryData);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCountries();
  }, []);

  //   Edit tables
  useEffect(() => {
    if (hotel) {
      Object.entries(hotel).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [hotel, setValue]);

  //   FORM SUBMISSION
  function onSubmit(data) {
    const hotelWithId = { id: v4(), ...data };
    if (hotel) {
      //eslint-disable-next-line
      hotelWithId.id === hotel.id;

      dispatch(editHotel(hotelWithId));
    } else {
      dispatch(addHotel(hotelWithId));
    }
    console.log(hotelWithId);
    close();
  }
  //   country api

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
        // backgroundColor: "#ffffff19",
        backgroundColor: "#ffff",
        backdropFilter: "blur(4px)",
        zIndex: "1000",
        transition: "all 0.5s",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff19",
          borderRadius: "9px",
          boxShadow: "0 2.4rem 3.2rem rgba(0, 0, 0, 0.12)",
          padding: {
            xs: "none",
            sm: "3.2rem 4rem",
          },
          transition: "all 0.5s",
        }}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Button
            sx={{ position: "absolute", right: "2rem", padding: "0.4rem" }}
            onClick={close}
          >
            <HiMiniXMark />
          </Button>
          <FormRow label="Hotel name" error={errors?.name?.message}>
            <Input
              type="text"
              id="name"
              {...register("name", { required: "This field is required!" })}
            />
          </FormRow>
          <FormRow label="Hotel address" error={errors?.name?.message}>
            <Input
              type="text"
              id="address"
              {...register("address", { required: "This field is required!" })}
            />
          </FormRow>
          <FormRow label="Hotel country" error={errors?.name?.message}>
            {/* <Input
              type="text"
              id="country"
              {...register("country", { required: "This field is required!" })}
            /> */}
            <Select
              id="country"
              {...register("country", { required: "This field is required!" })}
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </Select>
          </FormRow>
          <FormRow label="Hotel rating" error={errors?.name?.message}>
            <Input
              type="number"
              id="rating"
              {...register("rating", {
                required: "This field is required!",

                max: 3,
              })}
            />
          </FormRow>
          <FormRow>
            <Button variation="secondary" type="reset" onClick={close}>
              Cancel
            </Button>

            <Button type="submit">Create Hotel</Button>
          </FormRow>
        </Form>
      </div>
    </div>
  );
}

export default CreateHotelForm;
