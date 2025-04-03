import { type FC } from 'react';

import { Container } from '@/shared/ui/Container/Container';

export const Sidebar: FC = () => {
  return (
    <aside className='w-full max-w-[15.5rem]'>
      <Container className='border-gray-shadow min-h-[100vh] w-full max-w-[15.5rem] border-r-1 px-5 pt-4'>
        Sidebar
      </Container>
    </aside>
  );
};
