import { type FC } from 'react';

import { Box } from '@/shared/ui/Box/Box';
import { Container } from '@/shared/ui/Container/Container';
import { Button } from '@/shared/ui/Button/Button';
import { SidebarMeetOptions } from './SidebarMeetOptions';

export const SidebarMeet: FC = () => {
  return (
    <Container className='border-gray-shadow border-t-2 pb-4'>
      <Box className='ml-5 py-2'>
        <h4 className='text-sidebar-title min-h-8 text-sm font-medium'>Meet</h4>
        <SidebarMeetOptions />
      </Box>
      <Box className='border-gray-shadow border-t-2 pt-2'>
        <Box className='ml-6'>
          <h4 className='text-sidebar-title min-h-8 text-sm font-medium'>
            Hangouts
          </h4>
          <Button className='bg-sing-in min-h-8 w-full max-w-[12.5rem] rounded-xs text-sm font-medium text-white'>
            Sign in
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
