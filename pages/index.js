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

  return (
    <div>
      {session ? (
        <p className="text-green-500">You are logged in!</p>
      ) : (
        <p>
          You are not logged in 😞
          <a href="/api/auth/signin">Please sign in</a>
        </p>
      )}
    </div>
  );
}
