import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/home/inbox');
  return null;
}
