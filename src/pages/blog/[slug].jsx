import { allDocs } from ".contentlayer/generated";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Icons } from "src/components/icons";
import { Button } from "src/components/ui/button";
import { Mdx } from "../../components/mdx-components";

export function getDocFromParams () {
  const pathname = usePathname()

  const doc = allDocs.find((doc) => doc.slug === pathname)

  // if (!doc) notFound()
  return doc
}

export default function Page () {
  const post = getDocFromParams()
  return (
    <article className="container relative max-w-4xl py-6 lg:py-10">
      <div>
        <div className="text-md flex justify-between block text-muted-foreground">
          <time>
            Published on {post.date}
          </time>
          <p>{post.readTime}</p>
        </div>

        <h1 className="mt-6 mb-6 inline-block font-heading font-bold text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>

        <Mdx code={post.body.code} />

        <div className="flex justify-center py-6 lg:py-10">
          <Button variant="ghost">
            <Link href="/" className="flex items-center text-base">
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              See all posts
            </Link>
          </Button>
        </div>

      </div>
    </article>
  )
}