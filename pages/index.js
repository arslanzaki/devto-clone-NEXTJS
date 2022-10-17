import Link from "next/link";
import styles from "../styles/Home.module.css";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      <Link
        prefetch={false}
        href={{ pathname: "/[username]", query: { username: "arslanzaki" } }}
      >
        <a>Arslan Zaki</a>
      </Link>
      <Loader show/>
    </div>
  );
}
