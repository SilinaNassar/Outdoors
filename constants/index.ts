import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/lightMode.webp" },
  { value: "dark", label: "Dark", icon: "/assets/icons/nightMode.png" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.webp",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/group.png",
    route: "/groups",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/company.png",
    route: "/companies",
    label: "Companies",
  },
  {
    imgURL: "/assets/icons/job1.png",
    route: "/jobs",
    label: "Jobs",
  },
  {
    imgURL: "/assets/icons/notification1.webp",
    route: "/notifications",
    label: "Notifications",
  },
  {
    imgURL: "/assets/icons/user.webp",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/msg.png",
    route: "/messages",
    label: "Messages",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
