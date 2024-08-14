import { createSlice, configureStore } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    navbar: false,
    hero: false,
    about: false,
    git: false,
    educa: false,
    expe: false,
    skills: false,
    projects: false,
    contact: false,
    footer: false,
    position: 0,
  },
  reducers: {
    toggleNav(state) {
      state.navbar = !state.navbar;
    },
    toggleHero(state) {
      state.hero = !state.hero;
    },
    toggleAbout(state) {
      state.about = !state.about;
    },
    toggleGit(state) {
      state.git = !state.git;
    },
    toggleEdu(state) {
      state.educa = !state.educa;
    },
    toggleExp(state) {
      state.expe = !state.expe;
    },
    toggleSkills(state) {
      state.skills = !state.skills;
    },
    toggleProjects(state) {
      state.projects = !state.projects;
    },
    toggleContact(state) {
      state.contact = !state.contact;
    },
    toggleFooter(state) {
      state.footer = !state.footer;
    },
    alterPosition(state, action) {
      if (action.payload.position === 0) {
        
      }
    },
  },
});
const store = configureStore({
  reducer: uiSlice.reducer,
});

export const uiActions = uiSlice.actions;
export default store;
