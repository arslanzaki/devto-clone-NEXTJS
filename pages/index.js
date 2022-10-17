import Link from "next/link";
import styles from "../styles/Home.module.css";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Link
        prefetch={false}
        href={{ pathname: "/[username]", query: { username: "arslanzaki" } }}
      >
        <a>Arslan Zaki</a>
      </Link>
      <Loader show />

      <button onClick={() => toast.success("Hello Toast!")}>
        Toast Me
      </button>
    </div>
  );
}
