import React from "react";

export const HouseTour = (props) => {
  const { onSectionChange, tourOpened, setTourOpened } = props;
  const { onPhotos, setPhotos } = props;

  return (
    <>
      {!tourOpened && (
        <button
          onClick={() => setTourOpened(!tourOpened)}
          className="z-20 fixed bottom-10 md:bottom-60 right-1/3 md:right-1/3 transform translate-x-1/2 m p-3 bg-red-600 rounded-md text-white hover:font-bold hover:bg-red-700 focus:bg-red-700"
        >
          <div>House Tour</div>
        </button>
      )}

      {/* Option to close the tour if it is opened */}
      {tourOpened && (
        <button
          onClick={() => setTourOpened(false)}
          className="z-20 fixed top-10  bg-red-500 right-20 m p-3 rounded-md text-white hover:bg-red-700 hover:font-bold focus:bg-red-700"
        >
          X
        </button>
      )}
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick} // This should trigger the onClick function passed as a prop
      className="text-2xl   cursor-pointer text-white hover:text-red-500 transition-colors"
    >
      {label}
    </button>
  );
};
