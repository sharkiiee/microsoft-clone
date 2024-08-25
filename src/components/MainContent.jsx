export function MainContent() {
  return (
    <div className="slider flex flex-col-reverse md:flex-row bg-gray-200">
      <div className="leftBox text-center">
        <h1 className="text-4xl">Surface Laptop 4</h1>
        <p>
          This laptop's unrivalled flexibility and AI features like Live
          Captions and Cocreator, enable you to do more than you ever imagined.
        </p>
      </div>
      <div className="rightBox">
        <img src="./images/main-pc.avif" alt="" className="" />
      </div>
    </div>
  );
}
