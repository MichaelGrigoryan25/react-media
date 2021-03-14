import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Media = ({ src, ...rest }) => {
  const [type, setType] = useState("");
  const [file, setFile] = useState({});

  useEffect(() => {
    const fetchFile = async () => {
      if (src.length === 0) {
        throw new Error("No URL provided");
      } else {
        const { data } = await axios.get(src, {
          responseType: "blob",
        });

        setFile(
          URL.createObjectURL(
            new File([data], Date(), {
              type: data.type,
            })
          )
        );
        setType(data.type);
      }
    };

    fetchFile();
    return () => {};
  }, []);

  if (type.startsWith("image")) {
    return <img src={file} {...rest} alt={src} />;
  } else if (type.startsWith("video")) {
    return <video src={file} {...rest} alt={src}></video>;
  } else if (type.startsWith("audio")) {
    return <audio src={file} {...rest}></audio>;
  } else {
    return null;
  }
};

export default Media;
