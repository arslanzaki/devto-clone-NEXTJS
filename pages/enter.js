import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { googleAuthProvider } from "../lib/firebase";

const auth = getAuth();
function EnterPage({}) {
  // const user = null;
  // const username = null;
  const { user, username } = useContext(UserContext);

  // 1. User signed out <SignInButton/>
  // 2. User signed in, but missing username <UsernameForm/>
  // 3. User signed in, has username <SignOutButton />
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

function SignInButton() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"/google.png"} /> Sign In With Google
    </button>
  );
}

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}
function UsernameForm() {}

export default EnterPage;
