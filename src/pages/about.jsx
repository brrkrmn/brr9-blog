import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link"
import { Icons } from "src/components/icons"
import { Button } from "src/components/ui/button"
import { Separator } from "src/components/ui/separator"

export default function About () {
  return (
    <div className="container flex flex-col items-center justify-items-center gap-10 text-center mt-20">
      <Avatar>
        <AvatarImage
          src="/images/profile.jpg"
          alt="Berra Karaman"
          className="relative flex h-44 w-44 shrink-0 overflow-hidden rounded-full object-cover" />
      </Avatar>
      <div>
        <h1 className="font-heading  enlargeOnHover text-4xl tracking-tight lg:text-[44px]">Berra Karaman</h1>
        <p className="mt-1 font-medium text-green" >Frontend developer</p>
      </div>
      <Separator className="w-60 lg:w-80" />
      <div className="flex gap-6">
        <Button
          variant="icon"
          size="icon"
          className="rounded-full"
          onClick={() => window.location = 'mailto:esma.berra.karaman@hotmail.com'}
        >
          <Icons.mail className="w-8 h-8 "/>
        </Button>
        <Button variant="icon" size="icon" className="rounded-full" >
          <Link href="https://www.linkedin.com/in/berra-karaman-3936471b0/" >
            <Icons.linkedin className="w-8 h-8"/>
          </Link>
        </Button>
        <Button variant="icon" size="icon" className="rounded-full" >
          <Link href="https://github.com/brrkrmn">
            <Icons.github className="w-8 h-8" />
          </Link>
        </Button>
      </div>
    </div>
  )
}