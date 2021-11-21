import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: 'default',
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    selectProject: (_, action) => (
      {
        selected: action.payload,
      }
    ),
  },
});

export const { selectProject } = projectsSlice.actions;
export default projectsSlice;
