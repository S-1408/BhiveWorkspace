import { createModel } from '@rematch/core';
import { RootModel } from './index';

interface Space{
  id:number;
  name:string;
}

interface SpacesState{
  spaceData :Space[];
}
const initialState={
  spaceData :[]
}
export const space = createModel<RootModel>()({
  state: {
    ...initialState
  } as SpacesState,

  reducers: {
    setSpaces: (state, payload: Space[]) => {
      return {...state,spaceData:payload}
    }  
  },

  effects: (dispatch) => ({
    async fetchSpaces() {
       const url = "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json";
      try {
        const res = await fetch(url);
        const json = await res.json();

        // Assuming the response looks like: { count: 42 }
        dispatch.space.setSpaces(json);
      } catch (error) {
        console.error('Failed to fetch count:', error);
      }
    },
  }),
});
