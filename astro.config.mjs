import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
    integrations: [mdx()],
    markdown: {
        remarkPlugins: [
            'remark-gfm',
            ['remark-toc', {
                heading: 'Зміст',
                maxDepth: 3,
                tight: true
            }]
        ],
        rehypePlugins: [
            'rehype-slug',
            ['rehype-autolink-headings', {
                behavior: 'wrap',
                properties: {
                    className: ['heading-link'],
                    ariaLabel: 'Перейти до заголовка',
                }
            }]
        ],
        shikiConfig: {
            theme: 'github-dark',
            wrap: true
        }
    }
});