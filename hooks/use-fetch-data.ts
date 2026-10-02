"use client";

import { useState } from "react";

import data from "@/data/data.json";

const useOneParagraph = () => {
  const [fetchedData, setFetchedData] = useState([data]);
  const [paragraph, setParagraph] = useState("");

  fetchedData.forEach(element => {
    console.log(element);
  });
}




export {
  useOneParagraph
}