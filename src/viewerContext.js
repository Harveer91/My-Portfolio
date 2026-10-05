import { createContext, useContext } from 'react';
import { viewers } from './data/profile';

export const ViewerContext = createContext({ viewer: viewers[0], setViewerId: () => {} });

export const useViewer = () => useContext(ViewerContext);
