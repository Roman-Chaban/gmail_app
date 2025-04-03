import { type ReactNode, type FC } from 'react';

import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar';
import { NoteBar } from '@/widgets/NoteBar/ui/NoteBar';

interface MainProps {
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className='flex'>
      <Sidebar />
      {children}
      <NoteBar />
    </main>
  );
};
