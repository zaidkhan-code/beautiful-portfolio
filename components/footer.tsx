import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              M-ISRAR<span className="text-primary">.</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              A passionate React developer with 4 years of experience building
              modern web applications.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              as="a"
              href="https://github.com/muhammad423"
              target="_blank"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              as="a"
              href="http://www.linkedin.com/in/muhammad-israr-1b7269288"
              target="_blank"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              as="a"
              href="https://twitter.com"
              target="_blank"
            >
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} M-ISRAR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
