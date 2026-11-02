"use client"

import { formatWPM, getAccuracy, getGrossWPM, getNetWPM } from "@/lib/utils";
import { Sentence } from "@/types/types";
import { useEffect, useState } from "react";

function useTypingTest(sentence: Sentence | null, isRunning: boolean) {
  const [typed, setTyped] = useState("");
  const [totalErrors, setTotalErrors] = useState(0);
  const [totalTypedWithErrors, setTotalTypedWithErrors] = useState(0);

  const reset = () => {
    setTyped("");
    setTotalErrors(0);
    setTotalTypedWithErrors(0);
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

        setTotalTypedWithErrors((prev) => prev + 1);

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
  }, [typed, sentence, isRunning])


  return {
    typed,
    totalErrors,
    totalTypedWithErrors,
    reset
  };
}

function useTimer(direction: "down" | "up", initial = 60) {
  const startValue = direction === "down" ? initial : 0;
  const [seconds, setSeconds] = useState(startValue);
  const [isActive, setIsActive] = useState(false);

  const isRunning = isActive && (direction === "up" || seconds > 0);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setTimeout(
      () => setSeconds((seconds) => (direction === "down" ? seconds - 1 : seconds + 1)),
      1000,
    );
    return () => clearTimeout(timer);
  }, [isRunning, seconds, direction]);

  const startTimer = () => { setSeconds(startValue); setIsActive(true); };
  const stopTimer = () => setIsActive(false);
  const resetTimer = () => { setIsActive(false); setSeconds(startValue); };

  // segundos transcurridos, sin importar la dirección para WPM
  const elapsed = direction === "down" ? initial - seconds : seconds;

  return {
    seconds,
    elapsed,
    formatted: String(seconds).padStart(2, "0"),
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
  };
}

function useStadistics(typed: string, totalTypedWithErrors: number, error: number, time: number, sentence: string) {
  // errors on screen
  const uncorrectedErrors = [...typed].filter((c, i) => c !== sentence[i]).length;

  const GROSS_WPM = getGrossWPM(typed.length, time);
  const WPM = getNetWPM(GROSS_WPM, uncorrectedErrors, time);
  const ACCURACY = getAccuracy(error, totalTypedWithErrors);

  return {
    WPM: formatWPM(WPM),
    ACCURACY,
  }
}

export {
  useTypingTest,
  useTimer,
  useStadistics
}