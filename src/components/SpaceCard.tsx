import { IndianRupee, ChevronsRight } from "lucide-react";

interface SpaceItem {
  name: string;
  images: [];
  day_pass_price: number;
  day_pass_discounts_percentage: {
    [key: string]: {
      value: number;
    };
  };
  // Add other fields like price, image, etc.
}

interface SpaceCardProps {
  item: SpaceItem;
}

const SpaceCard: React.FC<SpaceCardProps> = ({ item }) => {
  return (
    <div className="max-w-md w-[370px] h-[384px] mx-auto bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2 ">
        <div className="text-sm font-medium break-words max-w-full">
          {item.name}
        </div>

        <div className="text-sm text-gray-700 font-medium">
          <div className="flex flex-col items-center justify-center border p-2 text-center bg-[ #EEE7E7] border-[0.47px] rounded-md w-[52px] h-[52px]">
            <img
              src={"/media/assistant_direction.png"}
              className="w-[18px] h-[18px] "
            />
            <h6 className="text-xs">6km</h6>
          </div>
        </div>
      </div>

      {/* Center Image */}
      <div className="overflow-hidden ">
        {item.images.map((imgPath: string, imgIdx: number) => {
          const filename = imgPath.split("/").pop();
          return (
            <img
              key={imgIdx}
              src={`/media/${filename}`}
              alt={`Image ${imgIdx}`}
              className="w-[346px] h-[202px] object-cover shadow-md rounded-md"
            />
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-600 ">
        <div className="font-medium bg-[ #F9F9F9] border px-4 py-2 rounded-md">
          <p>Day Pass</p>

          <div className="flex flex-row items-center justify-between gap-5">
            {/* Left: Price */}
            <div className="flex items-center text-sm font-medium my-1">
              <IndianRupee className="w-4 h-4 " />
              <span>{item.day_pass_price}</span>
              <span className="text-xs relative top-[1px]">/day</span>
            </div>

            {/* Right: Arrow */}

            <ChevronsRight className="w-4 h-4 place-content-center" />
          </div>
        </div>
        <div className="font-medium bg-[#FFCF4B] border px-4 py-2 rounded-md">
          <p>Bulk Pass</p>

          <div className="flex flex-row items-center justify-between gap-5">
            {/* Left: Price */}
            <div className="flex items-center text-sm font-medium my-1">
              <IndianRupee className="w-4 h-4 " />
              <span>
                {item.day_pass_price * 10 -
                  item.day_pass_discounts_percentage["10"]["value"]}
              </span>
              <span className="text-xs relative top-[2px]">
                {" "}
                /<span className="mr-1">10</span>Days
              </span>
            </div>

            {/* Right: Arrow */}

            <ChevronsRight className="w-4 h-4 place-content-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;
