import React, { useState } from "react";
import { TableHeader } from "../../const/table-header";

interface tablePropTypes {
  userList: [] | null;
}

export const Table = React.memo(({ userList }: tablePropTypes) => {
  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userList?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(userList ? userList?.length / itemsPerPage : 0);

  const handleNavigationClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    direction: string
  ) => {
    event.preventDefault();

    const totalPages = Math.ceil(
      userList ? userList?.length / itemsPerPage : 0
    );

    if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((current) => current + 1);
    }
  };
  return (
    <div className="w-[80%] m-auto flex flex-col gap-4">
      <table className="table-auto text-white border-collapse gap-4  border border-white">
        <thead className="p-8">
          <tr>
            {Object.keys(TableHeader).map((head, i) => (
              <th className="border border-white p-8 uppercase" key={head + i}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((user, id) => (
            <tr key={id}>
              {Object.keys(TableHeader).map((key, i) => (
                <td className="border border-white p-8" key={key + i}>
                  {user[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {userList && userList?.length > itemsPerPage && (
        <section className="flex border text-white border-opacity-[.2] border-white w-[20%] p-4 gap-4 justify-between">
          <button
            className={`${currentPage === 1 ? "hidden" : ""}`}
            onClick={(e) => handleNavigationClick(e, "prev")}
          >
            Prev
          </button>

          <article>Page {currentPage}</article>

          <button
            className={`${currentPage === totalPages ? "hidden" : ""}`}
            onClick={(e) => handleNavigationClick(e, "next")}
          >
            Next
          </button>
        </section>
      )}
    </div>
  );
});
