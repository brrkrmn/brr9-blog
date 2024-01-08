import { allDocs } from ".contentlayer/generated";
import Link from "next/link";
import { Icons } from "src/components/icons";
import { Button } from "src/components/ui/button";
import { Mdx } from "../../components/mdx-components";

export default function Page({ post }) {
  return (
    <article className="container relative max-w-[820px] py-6">
      <div>
        <div className="text-sm flex justify-between block text-muted-foreground">
          <time>
            Published on {post.date}
          </time>
          <p>{post.readTime}</p>
        </div>

        <h1 className="mt-6 mb-6 inline-block font-heading font-bold text-[44px] leading-tight">
          {post.title}
        </h1>

        <Mdx code={post.body.code} />

        <div className="flex justify-center py-6 lg:py-10">
          <Button variant="ghost">
            <Link href="/" className="flex items-center text-sm">
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              See all posts
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

export async function getServerSideProps (context) {
  const { params } = context;
  const slug = params.slug;
  const post = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}
