import { GoFilter } from "react-icons/go";

const FilterCar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-2 text-blue-700">
        <span className="text-xl">
          <GoFilter />
        </span>
        <h3 className="font-semibold">فیلترها</h3>
      </div>
      <div className="flex flex-col gap-y-3 mt-7">
        <h4 className="text-slate-900 font-bold">انتخاب طرح فروش</h4>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" />
          <span className="text-sm">طرح پیش فروش ایران خودرو</span>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" />
          <span className="text-sm">طرح جمع آوری خودرو های فرسوده</span>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" />
          <span className="text-sm">طرح جوانی جمعیت</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 mt-7">
        <h4 className="text-slate-900 font-bold">انتخاب خودرو</h4>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" />
          <span className="text-sm">پژو ۲۰۶</span>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" />
          <span className="text-sm">پژو ۲۰۷</span>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" />
          <span className="text-sm">پژو پارس</span>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" />
          <span className="text-sm">سمند سورن پلاس</span>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" />
          <span className="text-sm">رانا پلاس</span>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" />
          <span className="text-sm">دنا پلاس توربو</span>
        </div>
      </div>
    </div>
  );
};

export default FilterCar;
