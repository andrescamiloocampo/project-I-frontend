// ErrorToast.tsx
"use client";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface ErrorToastProps {
  errorMessage?: string;
}

export function FormPopUp({ errorMessage }: ErrorToastProps) {
  useEffect(() => {
    if (errorMessage) {
      const toastId = `${errorMessage}-${Date.now()}`; 
      toast.error(errorMessage, {
        toastId,
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [errorMessage]);

  return <ToastContainer limit={1} />;
}
