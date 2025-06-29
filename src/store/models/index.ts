import { Models } from '@rematch/core';
import { space } from './space';

export interface RootModel extends Models<RootModel> {
  space: typeof space;
}

export const models: RootModel = { space };
