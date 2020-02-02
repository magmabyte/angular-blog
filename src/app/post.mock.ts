import { Post } from './post';

const shortDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis est placerat nisi vehicula tempus. Praesent neque odio, aliquet vel urna id, varius hendrerit tellus.';
const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis est placerat nisi vehicula tempus. Praesent neque odio, aliquet vel urna id, varius hendrerit tellus. Nullam est nisl, pharetra id pharetra ac, finibus ac ipsum. Cras condimentum fringilla ligula et ornare. Sed nec nisi lobortis, tempus enim imperdiet, tincidunt urna. Fusce non ex rhoncus, feugiat felis pulvinar, euismod tortor. Praesent ut scelerisque purus, ut lacinia sapien. Aliquam erat volutpat. Integer felis ligula, commodo sit amet gravida at, fermentum et arcu. Etiam nec auctor dolor. Fusce vestibulum molestie finibus. Sed molestie elementum libero in euismod. Praesent justo arcu, vestibulum dictum semper in, tincidunt sit amet dui. Vestibulum vel purus diam. Etiam ullamcorper erat nunc, at consequat justo sollicitudin sit amet. Aenean vel accumsan odio. Cras non aliquet arcu. Sed sed leo non nunc eleifend aliquam id sed velit. Nulla dui ipsum, feugiat at ipsum ut, porta suscipit risus. Nam scelerisque eros non lectus efficitur, et posuere quam euismod. Morbi ut dui non urna convallis gravida. Mauris leo nisi, pulvinar a tincidunt sed, tincidunt id nibh. Proin pellentesque, elit et malesuada consequat, felis dui bibendum sem, quis elementum arcu ante sit amet enim. Integer eget nibh id metus mollis efficitur ut a.';

export const Posts: Post[] = [
  { id: 0, title: 'Hustler', url: 'assets/awesome.png', author: 'Maximilian Brehm',
    date: new Date(2020, 2, 1),
    description: shortDescription, textUrl: 'assets/hustler.md' },
  { id: 1, title: 'A normal day', url: 'assets/awesome.png', author: 'Maximilian Brehm',
    date: new Date(2020, 2, 1),
    description: shortDescription, textUrl: 'assets/hustler.md' },
  { id: 2, title: 'Outer sunset', url: 'assets/awesome.png', author: 'Maximilian Brehm',
    date: new Date(2020, 2, 1),
    description: shortDescription, textUrl: 'assets/hustler.md' },
  { id: 3, title: 'Another life', url: 'assets/awesome.png', author: 'Maximilian Brehm',
    date: new Date(2020, 2, 1),
    description: shortDescription, textUrl: 'assets/hustler.md' },
];
