import Link from "next/link";

export default function Navbar() {
  //const { user, username } = {};
  const user = null,
    username = null;
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>

        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}
        {!username && (
          <>
            <li>
              <Link href="/enter">
                <button className="btn-blue">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
