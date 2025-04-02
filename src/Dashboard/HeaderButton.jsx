export const HeaderButton = ({ title }) => {
  return (
    <button className="bg-blue-400 min-w-28 hover:bg-blue-500 duration-200 cursor-pointer text-white px-4 py-2 rounded-3xl">
      <a href="#">{title}</a>
    </button>
  );
};
