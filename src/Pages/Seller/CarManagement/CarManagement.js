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
    brand: "",
    model: "",
    price: "",
    condition: "",
    images: null,
    description: "",
  };

  const validationSchema = Yup.object({
    brand: Yup.string().required("Please Enter a brand"),
    model: Yup.string().required("Please Enter a model"),
    price: Yup.number()
      .required("Please Enter a price")
      .positive("The price should be positive"),
    condition: Yup.string().required("Please Enter a condition"),
    images: Yup.mixed().required("Please Enter the picture"),
    description: Yup.string().max(500, "الوصف يجب أن لا يتجاوز 500 حرف"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("تم إرسال البيانات:", values);
    toast.success("🚗 The car has been saved successfully!", {
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
        to1="/saller/sallerProfile"
        to2="/saller/CarManagement"
        to3="/incoming-requests"
        to4="/messages"
        className="navbar"
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
                <label>The Brand</label>
                <Field
                  type="text"
                  name="brand"
                  placeholder="Ex: Toyota"
                  className="form-input"
                />
                <ErrorMessage
                  name="brand"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label>The Model</label>
                <Field
                  type="text"
                  name="model"
                  placeholder="Ex: Corolla"
                  className="form-input"
                />
                <ErrorMessage
                  name="model"
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
                <label>State</label>
                <Field as="select" name="condition" className="form-input">
                  <option value="">Select the State</option>
                  <option value="new">New</option>
                  <option value="used">Old</option>
                </Field>
                <ErrorMessage
                  name="condition"
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
                <label>Discription (Option)</label>
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
