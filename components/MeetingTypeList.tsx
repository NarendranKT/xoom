"use client";
import { meetingTypeList } from "@/constants";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {
   const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
      <HomeCard
        className={"bg-orange-1"}
        description={"Start an instant meeting"}
        icon={"/icons/add-meeting.svg"}
        label={"New Meeting"}
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        className={"bg-blue-1"}
        description={"via invitation link"}
        icon={"/icons/join-meeting.svg"}
        label={"Join Meeting"}
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        className={"bg-purple-1"}
        description={"Schedule Meeting"}
        icon={"/icons/schedule.svg"}
        label={"Plan your meeting"}
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomeCard
        className={"bg-yellow-1"}
        description={"Check out your recordings"}
        icon={"/icons/recordings.svg"}
        label={"View Recordings"}
        handleClick={() => router.push('/recordings')}
      />
    </section>
  );
};

export default MeetingTypeList;
