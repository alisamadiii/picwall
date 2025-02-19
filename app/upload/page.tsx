"use client";

import React, { useState } from "react";

import Content from "@/components/ui/content";
import { Button } from "@/components/ui/button";
import { useUpload } from "@/lib/endpoints/upload-file/query";

export default function UploadPage() {
  const [file, setFile] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);

  const { startUpload } = useUpload({
    status: (status) => {
      console.log(status);
    },
    result: (result) => {
      console.log(result);
    },
    getProgress: (progress) => {
      setProgress(progress);
    },
  });

  return (
    <Content className="mt-16">
      <input
        type="file"
        multiple
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFile(Array.from(e.target.files || []))
        }
      />
      <Button onClick={() => startUpload(file)}>Uploads</Button>
      <p>{progress}</p>
    </Content>
  );
}
