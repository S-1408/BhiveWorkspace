import { init, RematchRootState } from '@rematch/core';
import { models, RootModel } from './models';

export const store = init<RootModel>({
  models,
});

export type RootState = RematchRootState<typeof models>;
