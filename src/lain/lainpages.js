import { lazy } from "react";

export const lainPages = {
  love: {
    component: lazy(() => import("./Love")),
    audio: "/lain/audio/love.mp3",
  },

  wind: {
    component: lazy(() => import("./Wind")),
    audio: "/lain/audio/wind.mp3",
  },

  invlain: {
    component: lazy(() => import("./InvLain")),
    audio: "/lain/audio/invlain.mp3",
  },
};