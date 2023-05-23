import { MdKeyboardArrowDown } from "react-icons/md";

const Paginate = ({ ...props }) => {
  const {
    numberOfPages,
    prevPage,
    nextPage,
    setCurrentPage,
    currentPage,
    currentPageInfo,
  } = props;
  const pageNumbers: number[] = [...Array(numberOfPages + 1).keys()].slice(1);

  return (
    <div className={`flex items-center justify-between my-4`}>
      <div className={`flex items-center`}>
        <p
          className={`font-Work Sans text-[14px] leading-[16px] text-textColor`}
        >
          showing
        </p>
        <div
          className={`w-[80px] bg-[rgba(33,64,125,0.1)] rounded-[4px] p-1 mx-3 flex items-center justify-center cursor-pointer`}
        >
          <p
            className={`font-Work Sans text-[14px] leading-[16px] text-primaryColor font-[500]`}
          >
            {currentPageInfo.length}
          </p>
          <MdKeyboardArrowDown
            className={`w-[20px] h-[20px] text-primaryColor cursor-pointer ml-1`}
          />
        </div>
        <div>
          <p
            className={`font-Work Sans text-[14px] leading-[16px] text-textColor`}
          >
            out of 100
          </p>
        </div>
      </div>
      <div className={`flex items-center`}>
        <span
          onClick={prevPage}
          className={`cursor-pointer bg-[rgba(33,64,125,0.1)] p-[.1rem] flex justify-center rounded-[4px]`}
        >
          <MdKeyboardArrowDown
            className={`w-[20px] h-[20px] text-primaryColor cursor-pointer rotate-[90deg]`}
          />
        </span>
        <div className={`flex items-center`}>
          {pageNumbers.map((number) => {
            return (
              <div key={number}>
                <span
                  onClick={() => setCurrentPage(number)}
                  className={`ml-3 cursor-pointer ${
                    currentPage == number
                      ? `text-textColor`
                      : `text-[rgba(84,95,125,0.6)]`
                  }`}
                >
                  {number}
                </span>
              </div>
            );
          })}
        </div>
        <span
          onClick={nextPage}
          className={`cursor-pointer bg-[rgba(33,64,125,0.1)] p-[.1rem] flex justify-center rounded-[4px] ml-3`}
        >
          <MdKeyboardArrowDown
            className={`w-[20px] h-[20px] text-primaryColor cursor-pointer rotate-[-90deg]`}
          />
        </span>
      </div>
    </div>
  );
};

export default Paginate;
