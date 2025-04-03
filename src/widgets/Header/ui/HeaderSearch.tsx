'use client';

import { ChangeEvent, useState, type FC } from 'react';

import { Input } from '@/shared/ui/Input/Input';
import { SearchIcon } from '@/shared/ui/icons/Search/Search';
import { ArrowDown } from '@/shared/ui/icons/ArrowDown/ArrowDown';
import { Button } from '@/shared/ui/Button/Button';
import { Container } from '@/shared/ui/Container/Container';

type Search = string;

export const HeaderSearch: FC = () => {
  const [search, setSearch] = useState<Search>('');

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <Container
      tabIndex={0}
      className='bg-gray-bg-first focus-visible:ring-promotions-badge-first flex w-full max-w-[45rem] items-center gap-3 rounded-lg pr-2.5 pl-[1.0625rem] focus-visible:ring-2 focus-visible:outline-none'
    >
      <SearchIcon />
      <Input
        id='search'
        name='search'
        type='text'
        onChange={onSearchChange}
        value={search}
        className='placeholder:text-light-gray-middle text-light-gray-middle min-h-[2.875rem] w-full max-w-[40rem] rounded-lg font-medium focus:outline-none'
      />
      <Button className='focus-visible:ring-promotions-badge-first focus:outline-none focus-visible:rounded-md focus-visible:ring-2'>
        <ArrowDown />
      </Button>
    </Container>
  );
};
