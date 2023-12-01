"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
    const pathname = usePathname();


    return (
        <nav id="desktop-nav">
            <Link href="/">
                <div className={pathname === "/" ? "logoactive" : "logo"}>Nicolas Zhang</div>
            </Link>
            <div>
                <ul className="nav-links">
                    <li>
                        <Link href="/about">
                            <div className={pathname === "/about" ? "active" : ""}>About</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/experience">
                            <div className={pathname === "/experience" ? "active" : ""}>Experience</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <div className={pathname === "/projects" ? "active" : ""}>Projects</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <div className={pathname === "/contact" ? "active" : ""}>Contact</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}