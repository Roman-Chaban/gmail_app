import { type FC } from 'react';

import { Box } from '@/shared/ui/Box/Box';
import { HeaderSearch } from './HeaderSearch';
import { HeaderDetails } from './HeaderDetails';

import clsx from 'clsx';

export const HeaderContent: FC = () => {
  return (
    <Box className={`${clsx('flex w-full items-center justify-between gap-5')}`}>
      <HeaderSearch />
      <HeaderDetails />
    </Box>
  );
};
