"use client";

import { useState } from "react";

import data from "@/data/data.json";
import { DifficultyLevel } from "@/types/types";

const TYPING_AREA = document.getElementById("typing-area") as HTMLDivElement;


const useOneSentence = (difficulty: DifficultyLevel) => {
  const [fetchedData, setFetchedData] = useState([data]);
  const [paragraph, setParagraph] = useState("");


  fetchedData.forEach(element => {
    console.log(element[difficulty]);
  });

  console.log(TYPING_AREA);
}


export {
  useOneSentence
}