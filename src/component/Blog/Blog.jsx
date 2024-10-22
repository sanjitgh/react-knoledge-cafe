import { HiOutlineBookmark } from "react-icons/hi2";
const Blog = ({ blog, handelAddToBookmark }) => {
  const {
    cover,
    title,
    author,
    author_image,
    post_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-8 border-b pb-5">
      <img
        className="w-full mb-3 rounded-xl"
        src={cover}
        alt={`Cover picture of the title ${cover}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            className="w-14"
            src={author_image}
            alt={`Auther image here ${author_image}`}
          />
          <div>
            <h3 className="font-bold text-2xl">{author}</h3>
            <p className="text-[#11111160] font-semibold">{post_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#11111160] font-semibold">
            {reading_time} min read
          </p>
          <button
            onClick={() => handelAddToBookmark(blog)}
            className="text-[#11111160]"
          >
            <HiOutlineBookmark />
          </button>
        </div>
      </div>
      <h1 className="font-bold sm:text-4xl text-2xl my-3 leading-normal">
        {title}
      </h1>
      <p className="flex gap-2 items-center mb-4 text-[#11111165] text-xl font-medium">
        {hashtags.map((hash) => (
          <span key={hash}>{hash}</span>
        ))}
      </p>
      <a className="text-blue-700 underline" href="">
        Mark as read
      </a>
    </div>
  );
};

export default Blog;
