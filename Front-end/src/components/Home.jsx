import { useEffect, useMemo, useState } from "react";
import { Users } from "../api/users";
import { useSelector } from "react-redux";
import Row from "../ui/Row";
import SheetForm from "../ui/SheetForm";

/*
  i want when the user press the update buttons
    - they get a sheet like to update values of the user
*/

const Home = () => {
  const [users, setUsers] = useState([]);
  const { isSheetOpen, userData } = useSelector((state) => state.sheet);

  useEffect(() => {
    const fetchData = async () => {
      setUsers(await Users.getAllUsers());
    };
    fetchData();
  }, []);

  const sheet = useMemo(() => {
    return isSheetOpen === true ? (
      <SheetForm isSheetOpen={isSheetOpen} userData={userData} />
    ) : null;
  }, [isSheetOpen, userData]);

  return (
    <div className="bg-white w-[1024px] p-[27px] rounded-lg">
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
            {/* <th className="text-[#9ba7b5] min-w-[120px] text-start pb-[9px] text-[13px] font-bold">
              DELETE
            </th> */}
          </tr>
        </thead>
        <tbody className="last:[&_tr]:border-none [&_tr]:border-b [&_tr]:border-neutral-100">
          {users.map((user) => (
            <Row key={user.id} user={{ ...user }} />
          ))}
        </tbody>
      </table>
      {sheet}
    </div>
  );
};
export default Home;
