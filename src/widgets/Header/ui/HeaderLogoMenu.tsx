import { type FC } from 'react';

import Image from 'next/image';

import { MenuIcon } from '@/shared/ui/icons/Menu/Menu';

import { Button } from '@/shared/ui/Button/Button';
import { Container } from '@/shared/ui/Container/Container';
import { Box } from '@/shared/ui/Box/Box';

export const HeaderLogoMenu: FC = () => {
  return (
    <Container className='flex w-full max-w-[14.25rem] items-center gap-5'>
      <Button
        tabIndex={0}
        className='focus-visible:ring-promotions-badge-first rounded-lg focus-visible:ring-2 focus-visible:outline-none'
      >
        <MenuIcon />
      </Button>
      <Box
        tabIndex={0}
        className='focus-visible:ring-promotions-badge-first flex w-full max-w-[15.5rem] items-center gap-2 p-1 focus:rounded-md focus-visible:ring-2 focus-visible:outline-none'
      >
        <Image
          src={'/icons/header-icons/gmail-logo.svg'}
          alt='Gmail Logo Icon'
          className='h-auto max-w-10'
          width={40}
          height={40}
          priority
        />
        <span className='text-light-gray-middle inline-block text-2xl font-medium'>Gmail</span>
      </Box>
    </Container>
  );
};
