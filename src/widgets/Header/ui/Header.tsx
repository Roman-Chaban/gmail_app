import { memo, type FC } from 'react';

import { HeaderLogoMenu } from './HeaderLogoMenu';
import { Container } from '@/shared/ui/Container/Container';
import { HeaderContent } from './HeaderContent';

export const Header: FC = memo(() => {
  return (
    <header className='border-gray-shadow border-b-2'>
      <Container className='flex w-full items-center gap-5 px-5 py-3'>
        <HeaderLogoMenu />
        <HeaderContent />
      </Container>
    </header>
  );
});

Header.displayName = 'Header';
