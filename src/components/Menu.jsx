import React from "react";

export const Menu = (props) => {
  const {
    onSectionChange,
    menuOpened,
    setMenuOpened,
    section,
    animation,
    setAnimation,
    wireframe,
    setWireframe,
  } = props;

  const handleWireframeToggle = () => {
    setWireframe(!wireframe);
  };

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-4 right-4 p-3 bg-red-600 w-12 h-12 rounded-full hover:bg-red-700 hover:font-bold md:top-12 md:right-12"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45 translate-y-1" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 transition-all ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45 -translate-y-1" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed right-0 top-16 bottom-0 transition-all overflow-hidden font-light text-xs rounded-xl bg-[#702030] md:bg-transparent ${
          menuOpened ? "w-64 p-4 md:p-8" : "w-0 p-0"
        } md:top-32`}
      >
        <div className="flex-1 flex flex-col items-start gap-4 md:gap-8">
          <MenuButton
            label="Home"
            onClick={() => onSectionChange(0)}
            isActive={section === 0}
          />
          <MenuButton
            label="Skills"
            onClick={() => onSectionChange(1)}
            isActive={section === 1}
          />
          <MenuButton
            label="Projects"
            onClick={() => onSectionChange(2)}
            isActive={section === 2}
          />
        </div>
        <div className="flex-1 flex flex-col items-start mt-4 md:mt-6 text-xl">
          <div className="flex items-center text-white font-mono text-xs">
            <label htmlFor="wireframe" className="mr-2">
              Wireframes
            </label>
            <input
              type="checkbox"
              id="wireframe"
              className="ml-2"
              checked={wireframe}
              onChange={handleWireframeToggle}
            />
          </div>
          <div className="flex items-center text-white font-mono text-xs mt-4 mb-5">
            <label htmlFor="animation" className="mr-2">
              Animation
            </label>
            <select
              id="animation"
              value={animation}
              onChange={(e) => setAnimation(e.target.value)}
              className="bg-red-600 text-white p-2 rounded m-2"
            >
              <option value="FallBLoop">Flying</option>
              <option value="HGreeting">Hi</option>
              <option value="Greeting">Greeting</option>
              <option value="Pool">Party</option>
              <option value="Swing">Swing</option>
              <option value="Dice">Dice</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick, isActive } = props;
  return (
    <button
      onClick={onClick}
      className={`text-lg cursor-pointer transition-colors px-4 py-2 rounded-lg ${
        isActive
          ? "text-red-600 font-bold"
          : "hover:text-red-500 hover:font-bold text-white"
      } ${isActive ? "md:bg-transparent" : "md:hover:bg-transparent"}`}
    >
      {label}
    </button>
  );
};
