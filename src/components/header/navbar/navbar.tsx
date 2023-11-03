import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex items-center space-x-14 text-lg">
            <Link href="/" className="transition-all hover:text-blue">
                Skills
            </Link>
            <Link href="/" className="transition-all hover:text-blue">
                Experience
            </Link>
            <Link href="/" className="transition-all hover:text-blue">
                About me
            </Link>
            <Link href="/" className="transition-all hover:text-blue">
                Experiments
            </Link>
            <Link href="/" className="transition-all hover:text-blue">
                Contact
            </Link>
        </nav>
    );
};

export default Navbar;
