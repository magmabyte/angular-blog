import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.image = (href: string, title: string, text: string) => {
    return '<center> \
      <img src="' + href + '" style="max-width: 100%; max-height: 100%;"> \
      </center>';
  };

  renderer.blockquote = (quote: string) => {
    return '<div style="display: flex; flex-direction: row; justify-content: flex-start"> \
    <div style="min-height: 1px; min-width: 3px; background: rgb(220, 220, 220); margin-right: 5px"></div>\
    <div style="color: grey">' + quote + '</div>\
    </div>';
  }

  return {
    renderer
  };
}
