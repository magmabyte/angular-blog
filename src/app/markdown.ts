import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.image = (href: string, title: string, text: string) => {
    return '<center><img src="' + href + '" style="max-width: 300px; max-height: 300px;"></center>';
  };

  return {
    renderer
  };
}
