import { SidebarNavPoints } from '../types/sidebar-nav';

import { Inbox } from '@/shared/ui/icons/sidebar/Inbox/Inbox';
import { Star } from '@/shared/ui/icons/sidebar/Star/Star';
import { Snoozed } from '@/shared/ui/icons/sidebar/Snoozed/Snoozed';
import { Sent } from '@/shared/ui/icons/sidebar/Sent/Sent';
import { Draft } from '@/shared/ui/icons/sidebar/Draft/Draft';
import { Spam } from '@/shared/ui/icons/sidebar/Spam/Spam';
import { Trash } from '@/shared/ui/icons/sidebar/Trash/Trash';
import { Categories } from '@/shared/ui/icons/sidebar/Categories/Categories';

export const sidebarNav: SidebarNavPoints = [
  {
    id: 1,
    pointTitle: 'Inbox',
    pointIcon: <Inbox />,
  },
  {
    id: 2,
    pointTitle: 'Starred',
    pointIcon: <Star />,
  },
  {
    id: 3,
    pointTitle: 'Snoozed',
    pointIcon: <Snoozed />,
  },
  {
    id: 4,
    pointTitle: 'Sent',
    pointIcon: <Sent />,
  },
  {
    id: 5,
    pointTitle: 'Drafts',
    pointIcon: <Draft />,
  },
  {
    id: 6,
    pointTitle: 'Spam',
    pointIcon: <Spam />,
  },
  {
    id: 7,
    pointTitle: 'Trash',
    pointIcon: <Trash />,
  },
  {
    id: 8,
    pointTitle: 'Categories',
    pointIcon: <Categories />,
  },
];
