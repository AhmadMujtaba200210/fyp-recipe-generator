import { ImageOutlined } from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDropzone } from "react-dropzone";
import FlexBetween from "../widgets/FlexBetween";
import UserImage from "../widgets/UserImage";
import WidgetWrapper from "../widgets/WidgetWrappr";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "../state";

const MyPostWidget = ({ picturePath }) => {
  const [singleFileError, setSingleFileError] = useState(false);
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const [error, setError] = useState(null);
  const _id = 1;
  const token = "token";
  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const handlePost = async () => {
    try {
      const formData = new FormData();
      formData.append("userId", _id);
      formData.append("description", post);
      if (image) {
        formData.append("picture", image);
        formData.append("picturePath", image.name);
      }

      const URL = process.env.REACT_APP_BACKEND_API_URL;
      const response = await fetch(URL, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to post. Please try again later.");
      }

      const posts = await response.json();
      dispatch(setPosts({ posts }));
      setImage(null);
      setPost("");
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (
        acceptedFiles.length > 1 ||
        (files.length > 0 && acceptedFiles.length > 0)
      ) {
        setSingleFileError(true);
      } else if (acceptedFiles.length === 1) {
        const file = acceptedFiles[0];
        setFiles([Object.assign(file, { preview: URL.createObjectURL(file) })]);
      }
    },
    [files]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
  });

  return (
    <WidgetWrapper>
      <FlexBetween gap="1rem">
        <UserImage image={picturePath} />
        <InputBase
          placeholder="What's on your mind..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: "2rem",
            paddingTop: "1rem",
            paddingRight: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1rem",
            marginBottom: "0.5rem",
          }}
        />
        <Button className="readmore" disabled={!post} onClick={handlePost}>
          Post
        </Button>
      </FlexBetween>
      {isImage && (
        <Box>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {files.length === 0 && (
              <Typography
                sx={{
                  pt: 1.5,
                  pb: 0,
                  pl: 0.5,
                  pr: 0.5,
                  textAlign: "center",
                }}
              >
                {isDragActive
                  ? "Drop the files here ..."
                  : "Drag & drop files here, or click to select files"}
              </Typography>
            )}
          </div>

          {/* Display previews */}
          <ul
            style={{
              marginTop: "0.2rem",
              marginBottom: "0.1rem",
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
                    width: "1.25rem",
                    height: "1.25rem",
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
                      width: "1rem",
                      height: "1rem",
                      fill: "#fff",
                      transition: "fill 0.2s ease-in-out",
                    }}
                  />
                </button>
              </li>
            ))}
          </ul>
        </Box>
      )}
      {/* <Divider sx={{ margin: "1.25rem 0" }} /> */}

      <FlexBetween>
        <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
          <ImageOutlined
            sx={{ color: "green", display: files.length ? "none" : "flex" }}
          />
          <Button
            className="readmore"
            style={{ display: files.length ? "none" : "inline-block" }}
          >
            Image
          </Button>
        </FlexBetween>

        
      </FlexBetween>

      {/* Error Snackbar */}
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar>
      <Snackbar
        open={singleFileError}
        autoHideDuration={6000}
        onClose={() => setSingleFileError(false)}
      >
        <Alert
          onClose={() => setSingleFileError(false)}
          severity="warning"
          sx={{ width: "100%" }}
        >
          You can only upload one file at a time.
        </Alert>
      </Snackbar>
    </WidgetWrapper>
  );
};

export default MyPostWidget;