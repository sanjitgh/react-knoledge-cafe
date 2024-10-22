import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 h-fit">
      <div className="border border-[#6047EC] p-7 bg-[rgba(96,71,236,0.07)] mb-5 rounded-lg">
      <h1 className="font-bold text-2xl text-[#6047EC]">Spent time on read : {readingTime}</h1>
      </div>
      <div className="bg-gray-100 rounded-lg p-5">
        <h1 className="text-2xl font-bold mb-4">
          Bookmarked Blogs : {bookmarks.length}
        </h1>
        <div className="flex flex-col gap-3">
          {bookmarks.map((bookmark) => (
            <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
