import { JSX } from 'react';

interface SidebarNavPoint {
  id: number;
  pointTitle: string;
  pointIcon: JSX.Element;
}

type SidebarNavPoints = Array<SidebarNavPoint>;

export type { SidebarNavPoint, SidebarNavPoints };
