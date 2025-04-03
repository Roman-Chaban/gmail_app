import { HeaderDetailSubjects } from '../types/header-details';

import { DetailIcon } from '@/shared/ui/icons/Detail/Detail';
import { AppsIcon } from '@/shared/ui/icons/Apps/Apps';
import { HelpIcon } from '@/shared/ui/icons/Help/HelpIcon';

export const headerDetailsRow: HeaderDetailSubjects = [
  {
    id: 1,
    icon: <HelpIcon />,
  },
  {
    id: 2,
    icon: <DetailIcon />,
  },
  {
    id: 3,
    icon: <AppsIcon />,
  },
];
