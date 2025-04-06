import { type FC } from 'react';

import { Container } from '@/shared/ui/Container/Container';
import { Button } from '@/shared/ui/Button/Button';
import { ComposePlus } from '@/shared/ui/icons/ComposePlus/ComposePlus';
import { SidebarMenu } from './SidebarMenu';
import { Box } from '@/shared/ui/Box/Box';
import { SidebarMeet } from './SidebarMeet';

export const Sidebar: FC = () => {
  return (
    <aside className='w-full min-h-[100vh] max-w-[15.5rem]'>
      <Container className='border-gray-shadow min-h-[100vh] flex w-full max-w-[15.5rem] flex-col justify-between gap-10 border-r-2 pt-4'>
        <Box className='flex flex-col gap-4'>
          <Button className='text-sidebar-button-color shadow-sidebar-shadow-button ml-5 flex w-full max-w-[7.875rem] cursor-pointer items-center gap-4 rounded-[2.5rem] p-[0.75rem_1.25rem_0.75rem_0.75rem] text-sm font-medium tracking-[-0.01em] inset-shadow-sm'>
            <ComposePlus />
            Compose
          </Button>

          <SidebarMenu />
        </Box>
        <SidebarMeet />
      </Container>
    </aside>
  );
};
