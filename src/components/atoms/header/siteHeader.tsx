"use client";

import React, { useState } from 'react'
import { siteConfig } from '@/config/site'
import MainNav from './mainNav'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import UserNav from './userNav';
import LoginOtp from '../modal/login-otp';
import ThemeToggle from '../theme/themeToggle';

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link> */}
            <Button asChild>
              <Link href="#" onClick={() => setOpen(!open)}>Login</Link>
            </Button>
            {/* <LoginModal
              isOpen={open}
              onClose={() => setOpen(false)}
              loading={open ? false : true}
            /> */}
            <LoginOtp
              isOpen={open}
              onClose={() => setOpen(false)}
              loading={open ? false : true}
            />
            <UserNav />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader