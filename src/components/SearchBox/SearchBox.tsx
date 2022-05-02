import React, { useCallback, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Icon from "../Widgets/Icon";
import IconButton from "../Widgets/IconButton";

const SearchBox = () => {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((p) => !p);
  }, []);

  return (
    <React.Fragment>
      {!open && (
        <IconButton onClick={toggle}>
          <Icon><BiSearch /></Icon>
        </IconButton>
      )}

      {open && (
        <div
          className="flex items-center bg-white text-gray-700 placeholder:text-gray-500
            absolute w-full top-0 left-0 z-10 h-16 px-1"
        >
          <input
            className="px-4 w-full bg-white text-gray-700 placeholder:text-gray-500 border-none text-base h-[calc(100%-5px)]"
            type="text"
            placeholder="Search here..."
            autoFocus
          />
          <IconButton onClick={toggle} className="align-middle mx-4">
            <Icon><AiOutlineClose /></Icon>
          </IconButton>
        </div>
      )}
    </React.Fragment>
  );
};

export default SearchBox;
