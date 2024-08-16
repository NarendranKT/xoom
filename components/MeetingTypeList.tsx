"use client";
import { meetingTypeList } from "@/constants";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModel from "./MeetingModel";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/components/ui/use-toast";

const MeetingTypeList = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();
  const { user } = useUser();
  const client = useStreamVideoClient();

  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      const id = crypto.randomUUID();
      const call = client.call("default", id);

      //# If can't create a call
      if (!call) throw new Error("Failed to create call!");

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }

      toast({
        title: "Meeting created",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to create meeting!",
      });
    }
  };

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
        handleClick={() => setMeetingState("isJoiningMeeting")}
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
        handleClick={() => router.push("/recordings")}
      />

      <MeetingModel
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
