import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Bookmarks from "./component/Bookmarks/Bookmarks";
import Header from "./component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handelAddToBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };

  const handelMarkAsRead = (id,time) => {
    setReadingTime(readingTime + time);
    //remove the read blog from bookmark
    const remaingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remaingBookmarks);
  };

  return (
    <>
      <div className="container mx-auto px-1">
        <Header></Header>
        <main className="md:flex my-10 gap-8">
          <Blogs
            handelAddToBookmark={handelAddToBookmark}
            handelMarkAsRead={handelMarkAsRead}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
            handelMarkAsRead={handelMarkAsRead}
            readingTime={readingTime}
          ></Bookmarks>
        </main>
      </div>
    </>
  );
}

export default App;
