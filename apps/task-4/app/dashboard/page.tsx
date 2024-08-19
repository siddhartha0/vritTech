import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import Home from "../../components/home/home";

const SECRET_KEY = "Secret123";

interface DecodedToken {
  userName: string;
}

const Dashboard = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/");
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as DecodedToken;
    return (
      <div>
        <Home username={decoded.userName} />
      </div>
    );
  } catch (err) {
    redirect("/");
  }
};

export default Dashboard;
