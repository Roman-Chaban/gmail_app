import { type JSX } from 'react';

type HeaderDetailSubject = {
  id: number;
  icon: JSX.Element;
};

type HeaderDetailSubjects = Array<HeaderDetailSubject>;

export type { HeaderDetailSubject, HeaderDetailSubjects };
