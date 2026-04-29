import { lazy } from "react";

const base = import.meta.env.BASE_URL;

export const lainPages = {
  love: {
    component: lazy(() => import("./Love")),
    audio: `${base}lain/audio/love.mp3`,
  },

  wind: {
    component: lazy(() => import("./Wind")),
    audio: `${base}lain/audio/wind.mp3`,
  },

  invlain: {
    component: lazy(() => import("./InvLain")),
    audio: `${base}lain/audio/invlain.mp3`,
  },
};