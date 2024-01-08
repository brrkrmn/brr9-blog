import Link from "next/link";

export function PostCard ({ post }) {
  return (
    <article className="p-8 group relative flex flex gap-6 space-y-2 border-[1px] rounded-md shadow hover:shadow-md transition duration-300">
      <div className="flex flex-col items-end gap-2 pt-3 shrink-0 w-40">
        <p className="text-sm text-green">{post.date}</p>
        <p className="text-sm text-muted-foreground text-green">{post.readTime}</p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p className="text-muted-foreground">{post.description}</p>
      </div>

      <Link href={post.slug} className="absolute inset-0">
        <span className="sr-only">View Post</span>
      </Link>
    </article>
  )
}