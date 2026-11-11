"use client"

import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import logo from "@/app/images/logo.png"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/jobs", label: "Browse Jobs" },
  { href: "/company", label: "Company" },
  { href: "/pricing", label: "Pricing" },
]

const linkClassName =
  "text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"

const signInClassName =
  "text-sm font-medium text-indigo-500 transition-colors hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"

const getStartedClassName =
  "bg-indigo-500 px-4 text-white hover:bg-indigo-600 dark:hover:bg-indigo-400"

export function Navbar() {
  return (
    <header className="px-4 pt-4 md:px-8 md:pt-6">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-4 shadow-sm md:h-16 md:px-6 dark:border-white/10 dark:bg-zinc-900 dark:shadow-none"
      >
        <Link href="/" aria-label="HireLoop home" className="shrink-0">
          <Image
            src={logo}
            alt="HireLoop"
            className="h-7 w-auto md:h-8"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClassName}>
              {link.label}
            </Link>
          ))}

          <span
            aria-hidden="true"
            className="h-5 w-px bg-zinc-200 dark:bg-white/10"
          />

          <Link href="/sign-in" className={signInClassName}>
            Sign In
          </Link>

          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/sign-up" />}
            className={getStartedClassName}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile navigation */}
        <Sheet>
          <SheetTrigger
            aria-label="Open navigation menu"
            render={
              <Button variant="ghost" size="icon" className="md:hidden" />
            }
          >
            <Menu />
          </SheetTrigger>

          <SheetContent side="right" className="gap-6 sm:max-w-xs">
            <SheetHeader className="border-b border-black/5 pb-4 dark:border-white/10">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <Image src={logo} alt="HireLoop" className="h-7 w-auto" />
            </SheetHeader>

            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  nativeButton={false}
                  render={
                    <Link
                      href={link.href}
                      className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-white"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>

            <SheetFooter className="mt-auto flex flex-col gap-2 border-t border-black/5 pt-4 dark:border-white/10">
              <SheetClose
                nativeButton={false}
                render={
                  <Link
                    href="/sign-in"
                    className="inline-flex h-9 w-full items-center justify-center rounded-lg border border-input bg-background px-3 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  />
                }
              >
                Sign In
              </SheetClose>

              <SheetClose
                nativeButton={false}
                render={
                  <Link
                    href="/sign-up"
                    className={`inline-flex h-9 w-full items-center justify-center rounded-lg border border-transparent text-sm font-medium transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 ${getStartedClassName}`}
                  />
                }
              >
                Get Started
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
