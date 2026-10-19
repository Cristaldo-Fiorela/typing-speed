"use client"

import { getAccuracy, getGrossWPM, getNetWPM } from "@/lib/utils";
import { Sentence } from "@/types/types";
import { useEffect, useState } from "react";

// let errors: number = 0;


// TODO: recopilar en una variable lo tipeado, los errores, comparar con el texto original, si la keyboard seleccionada es para borrar se tiene que borrar una index del string.
// TODO: hay que resetear en cada vuelta el typed

function useTypingTest(sentence: Sentence | null, isRunning: boolean) {
  const [typed, setTyped] = useState("");
  const [totalErrors, setTotalErrors] = useState(0);
  const [totalCharTyped, setTotalCharTyped] = useState(0);

  const reset = () => {
    setTyped("");
    setTotalErrors(0);
    setTotalCharTyped(0);
  };

  useEffect(() => {
    if (!isRunning) return

    // Se agrega funcion para trabajar sobre el mismo objeto en memoria y poder resetearlo en cada vuelta del useEffect
    const handleKeyDown = (e: KeyboardEvent) => {
      // BORRAR
      if (e.key === "Backspace") {
        setTyped((prev) => prev.slice(0, -1));
      }

      // IGNORAR TECLAS ESPECIALES (Tab, Shift, Enter, etc)
      if (e.key.length === 1) {
        if (e.key === " ") e.preventDefault(); // el espacio puede ocacionar que si la pag tiene scroll, se deslice.

        // COMPARAR y GUARDAR
        if (e.key !== sentence?.text[typed.length]) {
          setTotalErrors(prev => prev + 1);
        }
        setTyped((prev) => prev + e.key);
        setTotalCharTyped((prev) => prev + 1);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    // reset
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [typed, sentence, isRunning])


  return {
    typed,
    totalErrors,
    totalCharTyped,
    reset
  };
}

function useCountdown(seconds: number) {
  const [counter, setCounter] = useState(seconds);
  const [isActive, setIsActive] = useState(false);

  const isRunning = isActive && counter > 0;

  useEffect(() => {
    if (!isRunning) return;

    const timeout = setTimeout(() => {
      setCounter((c) => c - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isRunning, counter]);

  const start = () => {
    setCounter(seconds);
    setIsActive(true);
  };

  const resetCounter = () => {
    setIsActive(false);
    setCounter(seconds);
  };

  const FORMATED_COUNTER = String(counter).padStart(2, "0");

  return {
    counter,
    FORMATED_COUNTER,
    isRunning,
    start,
    resetCounter
  };
}

function useStadistics(typed: string, totalTyped: number, error: number, time: number) {
  const GROSS_WPM = getGrossWPM(typed.length, time);
  const WPM = getNetWPM(GROSS_WPM, error, time);
  const ACCURACY = getAccuracy(typed.length, totalTyped);

  return {
    WPM,
    ACCURACY
  }
}

export {
  useTypingTest,
  useCountdown,
  useStadistics
}