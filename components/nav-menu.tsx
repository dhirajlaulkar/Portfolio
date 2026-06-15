"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/projects", label: "All Projects" },
  {
    href: "/Dhiraj_Laulkar_SWE.pdf",
    label: "Resume",
    external: true,
  },
];

export function NavMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerWidth >= 768 && isOpen) { // 768px is the 'md' breakpoint
          setIsOpen(false);
        }
      }, 150); // Debounce resize events by 150ms
    }

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <div className="flex items-center gap-4">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm hover:text-primary transition-colors"
            {...(link.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>        <DropdownMenuTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px] md:hidden" sideOffset={8}>
          {links.map((link) => (
            <DropdownMenuItem key={link.href} asChild>
              <Link
                href={link.href}
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
