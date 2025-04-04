import { type FC } from 'react';

import { Button } from '@/shared/ui/Button/Button';
import { List } from '@/shared/ui/List/List';

import { sidebarNav } from '../data/sidebar-nav';

export const SidebarMenu: FC = () => {
  return (
    <nav>
      <List
        className='ml-5 flex flex-col'
        itemClassName='min-h-8 flex items-center'
        tag='ul'
        getItemKey={(itemKey) => itemKey.id}
        renderList={sidebarNav}
        renderItem={(point) => (
          <Button className='flex items-center gap-4 p-1'>
            {point.pointIcon}
            <h4 className='text-sidebar-title text-sm'>{point.pointTitle}</h4>
          </Button>
        )}
      />
    </nav>
  );
};
