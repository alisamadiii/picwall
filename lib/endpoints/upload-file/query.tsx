"use client";

import { generateReactHelpers } from "@uploadthing/react";
import { toast } from "sonner";
import type { ClientUploadedFileData } from "uploadthing/types";

import { OurFileRouter } from "@/app/api/uploadthing/core";

const { useUploadThing } = generateReactHelpers<OurFileRouter>();

export function useUpload({
  status,
  result,
  getProgress,
}: {
  status?: (status: string) => void;
  result?: (result: ClientUploadedFileData<{ uploadedBy: string }>[]) => void;
  getProgress?: (progress: number) => void;
}) {
  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      status?.("uploaded successfully!");
      result?.(res);
    },
    onUploadError: () => {
      toast.error("error occurred while uploading");
    },
    onUploadBegin: () => {
      status?.("uploading");
    },
    onUploadProgress: (progress) => {
      getProgress?.(progress);
    },
  });

  return { startUpload };
}
