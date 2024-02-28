import { useEffect, useState } from "react";
import { Users } from "../api/users";
import Row from "../ui/Row";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setUsers(await Users.getAllUsers());
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white w-full p-[27px] rounded-lg">
      <table className="w-full ">
        <thead className="border-b border-neutral-100">
          <tr>
            <th className="text-[#9ba7b5] min-w-[100px] text-start pb-[9px] text-[13px] font-bold">
              PROFILE
            </th>
            <th className="text-[#9ba7b5] min-w-[175px] text-start pb-[9px] text-[13px] font-bold">
              FRIST NAME
            </th>
            <th className="text-[#9ba7b5] min-w-[175px] text-start pb-[9px] text-[13px] font-bold">
              LAST NAME
            </th>
            <th className="text-[#9ba7b5] min-w-[100px] text-start pb-[9px] text-[13px] font-bold">
              AGE
            </th>
            <th className="text-[#9ba7b5] min-w-[100px] text-start pb-[9px] text-[13px] font-bold">
              SEXE
            </th>
            <th className="text-[#9ba7b5] min-w-[100px] text-start pb-[9px] text-[13px] font-bold">
              STATUS
            </th>
            <th className="text-[#9ba7b5] min-w-[120px] text-start pb-[9px] text-[13px] font-bold ">
              UPDATE
            </th>
            <th className="text-[#9ba7b5] min-w-[120px] text-start pb-[9px] text-[13px] font-bold ">
              DELETE
            </th>
          </tr>
        </thead>
        <tbody className="last:[&_tr]:border-none [&_tr]:border-b [&_tr]:border-neutral-100">
          {users.map((user) => (
            <Row key={user.id} user={{ ...user }} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
