import { createContext } from 'react';

import { RootStore } from './rootStore';

export const RootStoreContext = createContext<RootStore>({} as RootStore);
export const RootStoreProvider = RootStoreContext.Provider;