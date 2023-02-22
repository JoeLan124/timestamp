import React from "react";

function background() {
  return (
    <div className="">
      <header className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-[url('/backgroundbubbles.jpg')]">
        <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Welcome to my site!
        </div>
      </header>
      <div className="max-w-lg m-auto w-screen">
        <p className="m-4  bg-white/70 ">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repellat unde, hic sint eligendi qui quia
          harum molestiae. Hic fugit quidem soluta tenetur,
          sequi velit neque magnam officia. Ducimus, porro
          laborum. Alias, nihil architecto. Enim voluptate
          iste et aliquid illo optio temporibus harum alias
          accusamus aut accusantium quae corporis, quam fuga
          saepe itaque ipsum ab, repellendus molestias vitae
          rem tenetur nesciunt?
        </p>
      </div>
      <section className="flex items-center justify-center h-screen w-screen m-0 bg-fixed bg-center bg-cover bg-[url('/backgroundbubbles.jpg')]">
        <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Parralax inline
        </div>
      </section>
      <div className="max-w-lg m-auto">
        <p className="m-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repellat unde, hic sint eligendi qui quia
          harum molestiae. Hic fugit quidem soluta tenetur,
          sequi velit neque magnam officia. Ducimus, porro
          laborum. Alias, nihil architecto. Enim voluptate
          iste et aliquid illo optio temporibus harum alias
          accusamus aut accusantium quae corporis, quam fuga
          saepe itaque ipsum ab, repellendus molestias vitae
          rem tenetur nesciunt?
        </p>
      </div>
    </div>
  );
}

export default background;
