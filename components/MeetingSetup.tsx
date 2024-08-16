"use client";
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface IMeetingSetup {
  setIsSetupComplete: (value: boolean) => void;
}

const MeetingSetup = ({ setIsSetupComplete }: IMeetingSetup) => {
  const [isMicCamToggle, setIsMicCamToggle] = useState(false);
  const call = useCall();

  if (!call) throw new Error("No call!");
  useEffect(() => {
    if (isMicCamToggle) {
      call?.camera.disable();
      call?.camera.disable();
    } else {
      call?.camera.enable();
      call?.camera.enable();
    }
  }, [isMicCamToggle, call?.camera, call?.microphone]);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Meeting Setup</h1>
      <VideoPreview />
      <div className="flex h-16 w-full flex-col items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggle}
            onChange={(e) => setIsMicCamToggle(e.target.checked)}
          />
          Join with mic and camera off.
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
      >
        Join meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
