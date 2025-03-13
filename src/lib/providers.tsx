"use client";

import { useEffect } from "react";
import frameSdk from "@farcaster/frame-sdk";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    frameSdk.actions.ready().then(() => {
      console.log("Frame SDK ready");
    });
  }, []);

  return <>{children}</>;
};
