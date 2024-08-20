import { useEffect, useState } from "react";
import { tableHeaderPropTypes } from "../components/table/table";

export const useUser = () => {
  const [userList, setUserList] = useState<tableHeaderPropTypes[] | null>(null);
  const [err, setErr] = useState<null | string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const result = await response.json();
      setUserList(result.users);
    } catch (error) {
      setErr(error?.message ?? "Server has timedout, Please Wait!!");
    } finally {
      setLoading(false);
    }
  };

  return { userList, err, loading };
};
