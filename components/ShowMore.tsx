"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext}: ShowMoreProps) => {

    const router = useRouter();
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 6;
        const newPathName = updateSearchParams("limit", String(newLimit));
        router.push(newPathName, {scroll: false});
    }
  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton title="Show More" btnType="button" containerStyles="bg-black border-2 border-primary-yellow rounded-full text-white" handleClick={handleNavigation} />
        )}
    </div>
  )
}

export default ShowMore