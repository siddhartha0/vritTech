import { useUser } from "./hook/fetch-user";
import companyLogo from "./assets/companyLogo.svg";
import { Table } from "./components/";

const App = () => {
  const { err, userList, loading } = useUser();

  if (err) return <div>{err}</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <main className="bg-brand-bg flex flex-col gap-10 ">
      <img src={companyLogo} alt="" className="h-10" />
      <Table userList={userList} />​
    </main>
  );
};

export default App;
