import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return null;
  }

  if (session) {
    router.push("/home");
  }

  <div>
    {session ? (
      <p>You are logged in!</p>
    ) : (
      <p>You are not logged in 😞</p>
    )}
  </div>;
}
