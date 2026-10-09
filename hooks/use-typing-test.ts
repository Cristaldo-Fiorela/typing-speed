"use client"

import { Sentence } from "@/types/types";
import { useEffect, useState } from "react";

// let errors: number = 0;


// TODO: recopilar en una variable lo tipeado, los errores, comparar con el texto original, si la keyboard seleccionada es para borrar se tiene que borrar una index del string.
// TODO: hay que resetear en cada vuelta el typed

function useTypingTest(sentence: Sentence | null) {
  const [typed, setTyped] = useState("");
  const [totalErrors, setTotalErrors] = useState(0);

  useEffect(() => {
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
      }


    }

    window.addEventListener("keydown", handleKeyDown);

    // reset
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [typed, sentence])

  return {
    typed,
    totalErrors,
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

  const reset = () => {
    setIsActive(false);
    setCounter(seconds);
  };

  return {
    counter,
    isRunning,
    start,
    reset
  };
}

export {
  useTypingTest,
  useCountdown
}