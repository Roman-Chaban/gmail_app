import { type FC } from 'react';

import { Button } from '@/shared/ui/Button/Button';
import { List } from '@/shared/ui/List/List';
import { Box } from '@/shared/ui/Box/Box';

import { headerDetailsRow } from '../data/header-details';

export const HeaderDetails: FC = () => {
  return (
    <Box>
      <List
        tag='ul'
        itemClassName='flex items-center'
        className='flex items-center justify-center gap-4'
        renderList={headerDetailsRow}
        getItemKey={(item) => item.id}
        renderItem={(item) => (
          <Button className='focus-visible:ring-promotions-badge-first cursor-pointer focus:outline-none focus-visible:rounded-2xl focus-visible:ring-2'>
            {item.icon}
          </Button>
        )}
      />
    </Box>
  );
};
