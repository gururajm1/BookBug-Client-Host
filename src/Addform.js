import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addform = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bookName: "",
    authorName: "",
    subtitle: "",
    description: "",
    bookPrice: "",
    publisher: "",
    publicationYear: "",
    pages: "",
    imageLink: "",
    isbn13: "",
    language: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      console.log(formData);
      const email = localStorage.getItem("book-bug");

      if (!email) {
        throw new Error("User email not found");
      }

      const response = await axios.post(
        "https://bookbug-server-host.onrender.com/api/add-book",
        {
          email,
          bookData: formData,
        }
      );

      console.log("Form submitted successfully:", response.data);
      window.alert("Book data added successfully!");
      navigate("/dash");
    } catch (error) {
      console.error("Error submitting form:", error);
      window.alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="grid"
      margin="0 auto"
      padding="20px"
      maxWidth="600px"
      gap="10px"
      gridTemplateColumns="1fr"
      sx={{
        overflow: "hidden",
      }}
    >
      <TextField
        type="text"
        label="Book Name"
        onChange={handleChange}
        name="bookName"
        value={formData.bookName}
        InputProps={{
          style: {
            height: "48px",
            padding: "8px",
          },
        }}
      />
      <TextField
        type="text"
        label="Author Name"
        onChange={handleChange}
        name="authorName"
        value={formData.authorName}
        InputProps={{
          style: {
            height: "48px",
            padding: "8px",
          },
        }}
      />
      <TextField
        type="text"
        label="Subtitle"
        onChange={handleChange}
        name="subtitle"
        value={formData.subtitle}
        InputProps={{
          style: {
            height: "48px",
            padding: "8px",
          },
        }}
      />
      <TextField
        type="text"
        label="Description"
        onChange={handleChange}
        name="description"
        value={formData.description}
        InputProps={{
          style: {
            height: "48px",
            padding: "8px",
          },
        }}
      />
      <TextField
        type="number"
        label="Book Price"
        onChange={handleChange}
        name="bookPrice"
        value={formData.bookPrice}
        InputProps={{
          style: {
            height: "48px",
            padding: "8px",
          },
        }}
      />
      <TextField
        type="text"
        label="Publisher"
        onChange={handleChange}
        name="publisher"
        value={formData.publisher}
        InputProps={{
          style: {
            height: "48px",
            padding: "8px",
          },
        }}
      />
      <TextField
        type="number"
        label="Publication Year"
        onChange={handleChange}
        name="publicationYear"
        value={formData.publicationYear}
        InputProps={{
          style: {
            height: "48px",
            padding: "8px",
          },
        }}
      />
      <TextField
        type="number"
        label="Pages"
        onChange={handleChange}
        name="pages"
        value={formData.pages}
        InputProps={{
          style: {
            height: "48px",
            padding: "8px",
          },
        }}
      />
      <TextField
        type="text"
        label="Image Link"
        onChange={handleChange}
        name="imageLink"
        value={formData.imageLink}
        InputProps={{
          style: {
            height: "48px",
            padding: "8px",
          },
        }}
      />
      <TextField
        type="text"
        label="Unique Id (ISBN-13)"
        onChange={handleChange}
        name="isbn13"
        value={formData.isbn13}
        InputProps={{
          style: {
            height: "48px",
            padding: "8px",
          },
        }}
      />
      <TextField
        type="text"
        label="Language"
        onChange={handleChange}
        name="language"
        value={formData.language}
        InputProps={{
          style: {
            height: "48px",
            padding: "8px",
          },
        }}
      />
      <button
        type="submit"
        className={`mt-4 px-4 py-2 bg-zinc-800 text-white font-bold rounded hover:bg-gray-700 transition duration-300 ease-in-out ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Add Data"}
      </button>
    </Box>
  );
};

export default Addform;
