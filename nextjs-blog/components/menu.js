import Link from 'next/link'

export default function Menu() {
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About Me</a>
            </Link>
        </div>
    )
}