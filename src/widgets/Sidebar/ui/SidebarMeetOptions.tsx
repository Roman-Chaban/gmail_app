import { Box } from '@/shared/ui/Box/Box';
import { Button } from '@/shared/ui/Button/Button';
import Image from 'next/image';
import { type FC } from 'react';

export const SidebarMeetOptions: FC = () => {
  return (
    <Box className='flex flex-col'>
      <Button className='text-sidebar-title max-w-fit flex min-h-8 items-center gap-4 p-1 text-sm'>
        <Image
          src={'/icons/sidebar-icons/meet-icon.svg'}
          alt=''
          width={20}
          height={14}
        />
        New meeting
      </Button>
      <Button className='text-sidebar-title max-w-fit flex min-h-8 items-center gap-4 p-1 text-sm'>
        <Image
          src={'/icons/sidebar-icons/keyboard-icon.svg'}
          alt=''
          width={20}
          height={14}
        />
        Join a meeting
      </Button>
    </Box>
  );
};
