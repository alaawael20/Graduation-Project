import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import NavBar from "../../../Components/Uitily/NavBar";
import "./CarManagement.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../../Components/Uitily/Footer";
import { RecentAddCardData } from "../../../mock/RecentAddCardData";
import RecentlyCard from "../../../Components/RecentlyAdd/RecentlyCard";
import Pagination from "../../../Components/Uitily/Pagination";

const CarManagement = () => {
  const initialValues = {
    carName: "",
    price: "",
    fuel: "",
    engine: "",
    power: "",
    transmission: "",
    images: null,
    description: "",
  };

  const validationSchema = Yup.object({
    carName: Yup.string().required("Please Enter the car name"),
    price: Yup.number()
      .required("Please Enter a price")
      .positive("The price should be positive"),
    fuel: Yup.string().required("Please Select a fuel type"),
    engine: Yup.string().required("Please Select an engine type"),
    power: Yup.string().required("Please Select the power"),
    transmission: Yup.string().required("Please Select the transmission type"),
    images: Yup.mixed()
      .required("Please upload a picture")
      .test("fileType", "Unsupported file format", (value) =>
        Array.from(value || []).every((file) =>
          ["image/jpeg", "image/png"].includes(file.type)
        )
      )
      .test("fileSize", "File size is too large", (value) =>
        Array.from(value || []).every((file) => file.size <= 1048576)
      ),
    description: Yup.string().max(
      500,
      "Description must not exceed 500 characters"
    ),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Send Data Is Done:", values);
    toast.success("🚗 The car has been added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
    resetForm();
  };

  return (
    <div className="page-container">
      <NavBar
        link1="My Profile"
        link2="Car management"
        link3="Incoming requests"
        link4="Messages"
        to1="/Seller/SellerProfile"
        to2="/Seller/CarManagement"
        to3="/Seller/IncomingRequests"
        to4="/Seller/Messages"
      />
      <div className="form-container">
        <h1 className="form-title">Add a new car</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="form-group">
                <label>Car Name</label>
                <Field
                  type="text"
                  name="carName"
                  placeholder="Ex: KIA"
                  className="form-input"
                />
                <ErrorMessage
                  name="carName"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label>Price</label>
                <Field
                  type="number"
                  name="price"
                  placeholder="Dollar Price"
                  className="form-input"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label>Fuel</label>
                <Field as="select" name="fuel" className="form-input">
                  <option value="">Select the Fuel Type</option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="electric">Electric</option>
                  <option value="cng">CNG</option>
                </Field>
                <ErrorMessage
                  name="fuel"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label>Engine</label>
                <Field as="select" name="engine" className="form-input">
                  <option value="">Select the Engine Type</option>
                  <option value="v4">V4</option>
                  <option value="v6">V6</option>
                  <option value="v8">V8</option>
                  <option value="v12">V12</option>
                  <option value="electric">Electric Motor</option>
                </Field>
                <ErrorMessage
                  name="engine"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label>Power</label>
                <Field as="select" name="power" className="form-input">
                  <option value="">Select the Power</option>
                  <option value="100hp">100 HP</option>
                  <option value="150hp">150 HP</option>
                  <option value="200hp">200 HP</option>
                  <option value="300hp">300 HP</option>
                  <option value="400hp">400+ HP</option>
                </Field>
                <ErrorMessage
                  name="power"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label>Transmission</label>
                <Field as="select" name="transmission" className="form-input">
                  <option value="">Select the Transmission Type</option>
                  <option value="manual">Manual</option>
                  <option value="automatic">Automatic</option>
                  <option value="cvt">CVT</option>
                  <option value="dual-clutch">Dual-Clutch</option>
                  <option value="electric">Electric</option>
                </Field>
                <ErrorMessage
                  name="transmission"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label>Picture of car</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="form-input"
                  onChange={(event) =>
                    setFieldValue("images", event.currentTarget.files)
                  }
                />
                <ErrorMessage
                  name="images"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label>Description (Optional)</label>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Enter description here"
                  className="form-textarea"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="error-message"
                />
              </div>

              <button type="submit" className="form-button">
                Save
              </button>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </div>

      <div className="titlePage">Added Cars</div>
      <div className="containerPage cards my-5">
        {RecentAddCardData.map((card) => (
          <RecentlyCard
            key={card.id}
            price={card.price}
            NameCar={card.nameCar}
            fuel={card.fuel}
            engine={card.engine}
            power={card.power}
            trans={card.trans}
            img={card.img}
            editBtn="Edit"
            deleteBtn="Delete"
            display1="none"
          />
        ))}
      </div>
      <Pagination />
      <Footer />
    </div>
  );
};

export default CarManagement;
