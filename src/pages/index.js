import { allDocs } from ".contentlayer/generated";
import { PostCard } from "src/components/PostCard";
import { Separator } from "src/components/ui/separator";

export default function Home () {
  console.log(allDocs)
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-semibold text-4xl tracking-tight lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">Welcome! Here's What I've Been Writing</p>
        </div>
      </div>
      <Separator className="my-8" />
      <div className="flex flex-col gap-4">
        {allDocs.map((post) =>
          <PostCard key={post._id} post={post} />
          )}
      </div>
    </div>
  )
}