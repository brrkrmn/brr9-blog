import { allDocs } from ".contentlayer/generated";
import { PostCard } from "src/components/PostCard";
import { Separator } from "src/components/ui/separator";

export default function Home () {
  const posts = (allDocs.sort((a, b) => (b.number - a.number)))
  return (
    <div className="container max-w-[820px] py-6">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1">
          <h1 className="inline-block font-semibold text-4xl tracking-tight sm:text-[44px]">Blog</h1>
          <p className="text-sm sm:text-lg text-muted-foreground mt-2">Welcome! Here's What I've Been Writing</p>
        </div>
      </div>
      <Separator className="my-8" />
      <div className="flex flex-col gap-4">
        {posts.map((post) =>
          <PostCard key={post._id} post={post} />
          )}
      </div>
    </div>
  )
}