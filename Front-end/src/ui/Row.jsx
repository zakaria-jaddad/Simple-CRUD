import UpdateButton from "./UpdateButton";

const Row = ({ user }) => {
  return (
    <tr>
      <td className="p-[9px] pl-[10px]">
        <img
          className="w-[50px] h-[50px] rounded-sm transition-all duration-300 hover:rounded-lg cursor-pointer"
          src={user.image_path}
          alt="profile image"
          title="See Prrofile"
        />
      </td>
      <td className="p-[9px] pl-[0px] text-[14px] text-[#0c193b] font-semibold">
        {user.first_name}
      </td>
      <td className="p-[9px] pl-[0px] text-[14px] text-[#0c193b] font-semibold">
        {user.last_name}
      </td>
      <td className="p-[9px] pl-[0px] text-[14px] text-[#0c193b] font-semibold">
        {user.age}
      </td>
      <td className="p-[9px] pl-[0px] text-[14px] text-[#0c193b] font-semibold">
        {user.sex}
      </td>
      <td className="p-[9px] pl-[0px] text-[14px] text-[#0c193b] font-semibold">
        {user.status}
      </td>
      <td className="p-[9px] pl-[0px] text-[14px] text-[#0c193b] font-semibold">
        <UpdateButton userID={user.id} />
      </td>
      {/* <td className="p-[9px] pl-[0px] text-[14px] text-[#0c193b] font-semibold">
        <button className="py-2.5 px-6 rounded-lg font-medium bg-red-200 text-red-800">
          Delete
        </button>
      </td> */}
    </tr>
  );
};

export default Row;
