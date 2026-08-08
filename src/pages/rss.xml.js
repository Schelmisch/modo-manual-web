import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sello } from '../data/sello';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
  return rss({
    title: `${sello.nombre} — Blog`,
    description: 'Ideas sin humo para leer el cambio por cuenta propia. Del sello Modo manual.',
    site: context.site,
    language: 'es',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  });
}
