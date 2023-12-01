import Link from 'next/link'

export default function Footer() {
    return(
        <footer>
        <nav>
          <div className="nav-links-container">
          <ul className="nav-links">
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/experience">
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 Nicolas Zhang. All Rights Reserved</p>
      </footer>
    )
}