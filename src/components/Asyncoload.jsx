import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Asyncoload = ({ children, src }) => {
  const [type, setType] = useState(null);
  
   const fetchFile = async () => {
      try {
        const { data } = await axios.get(src, {
          responseType: "blob",
        });

        setType(data.type);
      } catch (error) {
        console.error(error);
        setType(null);
      }
    };

  useEffect(() => {
    fetchFile();
    return () => {};
  }, []);

  return children({ type, src });
};

export default Asyncoload;
