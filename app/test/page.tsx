'use client'

import { useState } from "react";
import { useZxing } from "react-zxing";

export default function BarcodeScanner() {
  const [result, setResult] = useState("");
  
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });
  

  return (
    <>
      <video ref={ref} />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  );
};