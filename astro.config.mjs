import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
    integrations: [mdx()],
    markdown: {
        remarkPlugins: [
            remarkGfm,
            [remarkToc, {
                heading: 'Зміст',
                maxDepth: 3,
                tight: true
            }]
        ],
        rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, {
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