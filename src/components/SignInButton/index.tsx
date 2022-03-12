import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from "./styles.module.scss";

export function SignInButton() {
  const { data: session } = useSession()

  console.log(session)

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={(event) => {
        signOut({ redirect: false });
      }}
    >

      <FaGithub color="#04D361" />
      {session.user.name}
      <FiX color="737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={(event) => {
        signIn('github', { redirect: false })
      }}
    >
      <FaGithub color="#EBA417" />
      Sign in with Github
    </button>
  );
}
