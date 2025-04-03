import { type FC } from 'react';

import { HeaderLogoMenu } from './HeaderLogoMenu';
import { HeaderSearch } from './HeaderSearch';
import { HeaderDetails } from './HeaderDetails';
import { Container } from '@/shared/ui/Container/Container';
import { Box } from '@/shared/ui/Box/Box';

export const Header: FC = () => {
  return (
    <header className='border-gray-shadow border-b-2'>
      <Container className='flex w-full items-center gap-5 px-5 py-3'>
        <HeaderLogoMenu />
        <Box className='flex w-full items-center justify-between gap-5'>
          <HeaderSearch />
          <HeaderDetails />
        </Box>
      </Container>
    </header>
  );
};
