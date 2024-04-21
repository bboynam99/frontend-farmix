
import { useContext } from 'react';

import { RootStore } from '@/store/rootStore';
import { RootStoreContext } from '@/store/rootStoreContext';

export const useStore = (): RootStore => useContext(RootStoreContext);