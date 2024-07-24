export const sidebarLinks = [
   {
      label: "Home",
      route: "/",
      imgUrl: "/icons/Home.svg",
   },
   {
      label: "Upcoming",
      route: "/upcoming",
      imgUrl: "/icons/upcoming.svg",
   },
   {
      label: "Previous",
      route: "/previous",
      imgUrl: "/icons/previous.svg",
   },
   {
      label: "Recordings",
      route: "/recordings",
      imgUrl: "/icons/Video.svg",
   },
   {
      label: "Personal Room",
      route: "/personal-room",
      imgUrl: "/icons/add-personal.svg",
   },
];

export const meetingTypeList = [
   {
      label: "New Meeting",
      description: "Start an instant meeting",
      icon: "/icons/add-meeting.svg",
      color: "bg-orange-1",
      meetingState: 'isJoiningMeeting'
   },
   {
      label: "Join Meeting",
      description: "via invitation link",
      icon: "/icons/join-meeting.svg",
      color: "bg-blue-1",
      meetingState: ''
   },
   {
      label: "Schedule Meeting",
      description: "Plan your meeting",
      icon: "/icons/schedule.svg",
      color: "bg-purple-1",
      meetingState:'isScheduleMeeting'
   },
   {
      label: "View Recordings",
      description: "Check out your recordings",
      icon: "/icons/Video.svg",
      color: "bg-yellow-1",
      meetingState: ''
   },
];
