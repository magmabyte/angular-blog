import { Post } from './post';

const shortDescription = 'Every day is awesome.';

export const Posts: Post[] = [
  { id: 0, title: 'Hustler', url: 'assets/Kibera_slum_Nairobi_Kenya_01.jpg', author: 'Maximilian Brehm',
    date: new Date(2020, 2, 3),
    description: '', textUrl: 'assets/hustler.md' },
  { id: 1, title: 'Another awesome day', url: 'assets/awesome.png', author: 'Maximilian Brehm',
    date: new Date(2020, 2, 2),
    description: shortDescription, textUrl: 'assets/awesome.md' },
  { id: 2, title: 'What an awesome day', url: 'assets/awesome.png', author: 'Maximilian Brehm',
    date: new Date(2020, 2, 1),
    description: shortDescription, textUrl: 'assets/awesome.md' },
  { id: 3, title: 'What an awesome day', url: 'assets/awesome.png', author: 'Maximilian Brehm',
    date: new Date(2020, 1, 31),
    description: shortDescription, textUrl: 'assets/awesome.md' },
];
