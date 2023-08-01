import Image from "next/image";
import { useRouter } from "next/navigation";

interface SidebarPropsType {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  headerURL: { id: number; title: string; path: string }[];
  pathname: string;
}
const Sidebar: React.FC<SidebarPropsType> = ({
  showSidebar,
  setShowSidebar,
  headerURL,
  pathname,
}) => {
  const router = useRouter();

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  const renderHeaderLinks = () => {
    return headerURL.map((item) => (
      <button
        key={item.id}
        className={`transition-all duration-300 ease-in-out border px-6 py-2 rounded-md 
    ${
      pathname === item.path
        ? "font-bold bg-blue-700 text-white border-blue-700"
        : "text-gray-500"
    }`}
        onClick={() => router.push(item.path)}
      >
        {item.title}
      </button>
    ));
  };

  return (
    <>
      <div
        className={`${
          showSidebar ? "inline-block fixed" : "hidden"
        } absolute top-0 left-0 w-full h-full bg-black z-40 bg-opacity-70 backdrop-blur-sm`}
        onClick={handleSidebarToggle}
      ></div>
      <div
        className={`bg-white right-0 p-5 absolute z-50 min-h-full ${
          showSidebar ? "flex flex-col" : "hidden"
        }`}
      >
        <Image
          src={"/assets/images/Iran-Khodro-Logo.png"}
          alt="Iran-Khodro-Logo.png"
          width={150}
          height={150}
          className="mx-auto"
        />
        <ul className="flex flex-col gap-y-4 mt-6">{renderHeaderLinks()}</ul>
      </div>
    </>
  );
};

export default Sidebar;
