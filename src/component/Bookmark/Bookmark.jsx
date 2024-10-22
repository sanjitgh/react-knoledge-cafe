const Bookmark = ({ bookmark }) => {
    const {title} = bookmark
  return (
    <div>
      <h3 className="bg-white p-4 rounded-lg text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default Bookmark;
