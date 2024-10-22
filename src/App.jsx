import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Bookmarks from "./component/Bookmarks/Bookmarks";
import Header from "./component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handelAddToBookmark = blog =>{
    console.log('bookmark coming soon');
    console.log(blog);
  }
  return (
    <>
      <div className="container mx-auto px-1">
        <Header></Header>
        <main className="md:flex my-10">
        <Blogs handelAddToBookmark={handelAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
        </main>
      </div>
    </>
  );
}

export default App;
