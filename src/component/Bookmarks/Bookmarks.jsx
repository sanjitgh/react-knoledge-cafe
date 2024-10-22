import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 h-fit bg-gray-100 rounded-lg p-5">
      <h1 className="text-2xl font-bold mb-4">
        Bookmarked Blogs : {bookmarks.length}
      </h1>
      <div className="flex flex-col gap-3">
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
