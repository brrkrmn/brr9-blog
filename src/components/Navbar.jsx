import Link from "next/link"
import { ModeToggle } from "src/components/ModeToggle"
import { Icons } from "src/components/icons"
import { Button } from "src/components/ui/button"

export function Navbar () {
  return (
    <header>
      <nav className="text-base font-normal flex items-center justify-between px-8 py-6 container">
        <div className="flex ">
          <Icons.sprout className="stroke-green stroke-2"/>
          <p className="text-lg font-medium">Brr</p>
        </div>
        <div className="flex gap-1 transition-colorshover:text-foreground/80">
          <Button variant="link">
            <Link href="/" className="text-base">Blog</Link>
          </Button>
          <Button variant="link">
            <Link href="about" className="text-base">About</Link>
          </Button>
        <ModeToggle />
        </div>
      </nav>
    </header>
  )
}