import Filter from "@/components/FilterCompanent";
import SearcCompanent from "@/components/Search";

export default function Search() {
  return (
    <>
      <div className="p-4">
        <SearcCompanent></SearcCompanent>
        <Filter />
      </div>
    </>
  );
}
