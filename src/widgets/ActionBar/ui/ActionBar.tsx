import { type FC } from 'react';

import { Container } from '@/shared/ui/Container/Container';
import { ActionMenu } from './ActionMenu';

export const ActionBar: FC = () => {
  return (
    <Container className='border-gray-shadow flex min-h-12 items-center border-b-2'>
      <ActionMenu />
    </Container>
  );
};
