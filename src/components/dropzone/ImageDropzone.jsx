import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import CloseIcon from "@mui/icons-material/Close";
import imagefile from "../../assets/images/images (2).png";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import RecipeChip from "../chip/RecipeChip";
import axios from "axios";
import Spinner from "./Spinner";

const ImageDropzone = ({ className }) => {
  const [files, setFiles] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State to manage Snackbar visibility
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
  });

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const removeAll = () => {
    setFiles([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!files?.length || isSubmitting) return;
    setIsSubmitting(true);


    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));
    // formData.append("upload_preset", "friendsbook");

    const URL = process.env.REACT_APP_CLASSIFICATION_API_URL;
    try {
      const response = await axios.post(URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*', // Adjust this to allow requests from specific origins
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
          'Access-Control-Allow-Headers': '*', // Adjust this to allow specific headers if necessary
        },
        crossDomain: true,
      });

      // If response is ok, proceed
      console.log(response.data.result);
      setResponseData(response.data.result);
    } catch (error) {
      // Update state to show snackbar with error message
      setSnackbarMessage(error.message);
      console.error(error);
      setSnackbarOpen(true);
    }  finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
    {isSubmitting && (
          <Spinner state={isSubmitting}/>
        )}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <MuiAlert
          elevation={6}
          variant="outlined"
          severity="error" // Change severity as per message type
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
      <form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
          {...getRootProps({
            className: className,
          })}
        >
          <input {...getInputProps()} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <img
              src={imagefile}
              alt="Upload Icon"
              style={{
                display: "inline-block",
                width: "100px",
                height: "100px",
                backgroundColor: "#f0f0f0",
                borderRadius: "50%",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag & drop files here, or click to select files</p>
            )}
          </div>
        </div>

        {/* Preview */}
        <section style={{ marginTop: "2.5rem" }}>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              type="button"
              className="readmore"
              onClick={removeAll}
              style={{
                marginTop: "1.125rem",
                textTransform: "uppercase",
                border: "1px solid ",
                borderRadius: "0.375rem",
                cursor: "pointer",
                transition:
                  "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
              }}
            >
              Remove all files
            </button>
            <button
              className="readmore"
              style={{
                marginLeft: "auto",
                marginTop: "1.125rem",
                textTransform: "uppercase",
                cursor: "pointer",
                transition:
                  "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
              }}
              onClick={handleSubmit}
            >
              Detect Ingredients
            </button>
          </div>

          {/* Accepted files */}
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "#4B5563",
              marginTop: "2.5rem",
              borderBottom: "1px solid #D1D5DB",
              paddingBottom: "0.75rem",
            }}
          >
            {/* Accepted Files */}
          </h3>
          <ul
            style={{
              marginTop: "1.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {files.map((file) => (
              <li
                key={file.name}
                style={{
                  position: "relative",
                  height: "max-content",
                  borderRadius: "0.375rem",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={file.preview}
                  alt={file.name}
                  width={100}
                  height={100}
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                  style={{
                    width: "100%",
                    height: "max-content",
                    objectFit: "contain",
                    borderRadius: "0.375rem",
                  }}
                />
                <button
                  type="button"
                  style={{
                    width: "1.75rem",
                    height: "1.75rem",
                    border: "1px solid #CBD5E0",
                    backgroundColor: "#CBD5E0",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: "-0.75rem",
                    right: "-0.75rem",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease-in-out",
                  }}
                  onClick={() => removeFile(file.name)}
                >
                  <CloseIcon
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      fill: "#fff",
                      transition: "fill 0.2s ease-in-out",
                    }}
                  />
                </button>
              </li>
            ))}
          </ul>
        </section>
        <div style={{ height: "25px" }}></div>
      </form>
      <RecipeChip data={responseData}/>
    </>
  );
};

export default ImageDropzone;

