import Link from "next/link";

export function PostCard ({ post }) {
  return (
    <article className="p-6 max-sm:pt-0 group relative flex max-sm:flex-col gap-6 max-sm:gap-2 space-y-2 border-[1px] rounded-md shadow hover:shadow-md transition duration-300">
      <div className="flex flex-col items-end gap-2 pt-3 shrink-0 w-40 max-sm:flex-row max-sm:w-[100%] max-sm:justify-between">
        <p className="text-sm text-green text-nowrap text-ellipsis overflow-hidden">{post.date}</p>
        <p className="text-sm text-muted-foreground text-ellipsis overflow-hidden text-nowrap">{post.readTime}</p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="max-sm:text-[20px] text-[22px] font-bold">{post.title}</h2>
        <p className="text-sm text-muted-foreground">{post.description}</p>
      </div>

      <Link href={post.slug} className="absolute inset-0">
        <span className="sr-only">View Post</span>
      </Link>
    </article>
  )
}