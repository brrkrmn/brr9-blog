import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
}

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    number: {
      type: 'number',
      required: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    readTime: {
      type: 'string',
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    }
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine (node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' '}]
            }
          },
          onVisitHighlightedLine (node) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord (node) {
            node.properties.className = ['word--highlighted']
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'link to section',
          }
        }
      ],
    ],
  }
})