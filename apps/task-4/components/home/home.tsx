"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface HomeProps {
  username: string;
}

const Home: React.FC<HomeProps> = ({ username }) => {
  const router = useRouter();

  const handleLogout = async () => {
    Cookies.remove("token");
    router.push("/");
  };

  return (
    <div>
      <main className="flex p-4 place-items-center justify-between ">
        <Image
          src="/companyLogo.svg"
          alt="companyLogo"
          height={20}
          width={110}
        />
        <h1>Welcome, {username}</h1>

        <div className="flex gap-5">
          <article>Dashboard</article>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
