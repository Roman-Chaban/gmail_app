import { JSX } from 'react';

type ActionMenuUnit = {
  id: number;
  icon: JSX.Element;
};

type ActionMenuUnits = Array<ActionMenuUnit>;

export type { ActionMenuUnit, ActionMenuUnits };
