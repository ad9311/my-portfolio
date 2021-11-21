import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: 'default',
  target: null,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    selectProject: (state, action) => (
      {
        selected: action.payload,
        target: state.target,
      }
    ),
    updateTarget: (state, action) => (
      {
        selected: state.selected,
        target: action.payload,
      }
    ),
  },
});

export const { selectProject, updateTarget } = projectsSlice.actions;
export default projectsSlice;
