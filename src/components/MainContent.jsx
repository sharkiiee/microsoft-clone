export function MainContent() {
  return (
    <div className="slider flex flex-col-reverse md:flex-row bg-[#e7f0f9] md:mx-4">
      <div className="leftBox flex flex-col justify-center items-center md:items-baseline text-center md:text-left py-10">
        <h1 className="mx-6 text-4xl">Surface Laptop 4</h1>
        <p className="mx-6">
          This laptop's unrivalled flexibility and AI features like Live
          Captions and Cocreator, enable you to do more than you ever imagined.
        </p>
      </div>
      <div className="rightBox">
        <img src="./images/main-pc.avif" alt="" className="hidden md:block" />
        <img src="./images/app-main-pc.avif" alt="" className="md:hidden" />
      </div>
    </div>
  );
}
