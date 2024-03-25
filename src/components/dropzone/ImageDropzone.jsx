import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CloseIcon from "@mui/icons-material/Close";
import imagefile from "../../assets/images/images (2).png";
const ImageDropzone = ({ className }) => {
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }

    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
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
    setRejected([]);
  };

  const removeRejected = (name) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!files?.length) return;

    const formData = new FormData();
    files.forEach((file) => formData.append("file", file));
    formData.append("upload_preset", "friendsbook");

    const URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
    const data = await fetch(URL, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
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
              cursor: "pointer", // Add cursor pointer
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)"; // Scale up on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)"; // Scale down on hover out
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
              //   fontSize: "0.75rem",
              marginTop: "1.125rem",

              textTransform: "uppercase",
              //   fontWeight: "600",
              border: "1px solid ",
              //   color: "#6B46C1",
              //   padding: "0.375rem 0.75rem",
              borderRadius: "0.375rem",
              cursor: "pointer",
              transition:
                "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
            }}
          >
            Remove all files
          </button>
          <button
            type="submit"
            className="readmore"
            style={{
              marginLeft: "auto",
              marginTop: "1.125rem",
              //   fontSize: "0.75rem",
              textTransform: "uppercase",
              //   fontWeight: "600",
              //   color: "#6B46C1",
              //   border: "1px solid #6B46C1",
              //   borderRadius: "0.375rem",
              //   padding: "0.375rem 0.75rem",
              cursor: "pointer",
              transition:
                "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
            }}
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
              {/* <p
                style={{
                  marginTop: "0.5rem",
                  color: "#4B5563",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                }}
              >
                {file.name}
              </p> */}
            </li>
          ))}
        </ul>

        {/* Rejected Files */}
        {/* <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: "600",
            color: "#4B5563",
            marginTop: "2.5rem",
            borderBottom: "1px solid #D1D5DB",
            paddingBottom: "0.75rem",
          }}
        >
          Rejected Files
        </h3>
        <ul
          style={{
            marginTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {rejected.map(({ file, errors }) => (
            <li
              key={file.name}
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                marginBottom: "1rem",
              }}
            >
              <div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#4B5563",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  {file.name}
                </p>
                <ul
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.75rem",
                    color: "#EF4444",
                  }}
                >
                  {errors.map((error) => (
                    <li key={error.code}>{error.message}</li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                style={{
                  marginTop: "0.5rem",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  color: "#6B46C1",
                  border: "1px solid #6B46C1",
                  borderRadius: "0.375rem",
                  padding: "0.25rem 0.75rem",
                  cursor: "pointer",
                  transition:
                    "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
                }}
                onClick={() => removeRejected(file.name)}
              >
                remove
              </button>
            </li>
          ))}
        </ul> */}
      </section>
      <div style={{ height: "25px" }}></div>
    </form>
  );
};

export default ImageDropzone;
