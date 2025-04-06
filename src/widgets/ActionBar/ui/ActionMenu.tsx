import { type FC } from 'react';

import { Button } from '@/shared/ui/Button/Button';
import { ArrowBack } from '@/shared/ui/icons/ArrowBack/ArrowBack';
import { List } from '@/shared/ui/List/List';

import { actionMenuUnits } from '../data/action-menu';
import { ActionMenuUnit } from '../types/action-menu';

import clsx from 'clsx';

export const ActionMenu: FC = () => {
  return (
    <nav className='flex max-h-fit w-full items-center gap-8 px-5 py-2'>
      <Button className='bg-transparent'>
        <ArrowBack />
      </Button>

      <List
        renderList={actionMenuUnits}
        renderItem={(unit: ActionMenuUnit, index: number) => (
          <Button
            className={`relative ${clsx({
              'after:bg-gray-shadow after:absolute after:top-0 after:right-[-10px] after:h-full after:w-[0.1rem] after:content-[""]':
                (index + 1) % 3 === 0 && index !== actionMenuUnits.length - 1,
            })}`}
          >
            {unit.icon}
          </Button>
        )}
        getItemKey={(unit) => unit.id}
        className='flex w-full items-center gap-5'
        itemClassName='flex items-center'
        tag='ul'
      />
    </nav>
  );
};
