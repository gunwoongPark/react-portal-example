import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const useClickOutside = (
  ref: RefObject<HTMLDivElement>
): { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> } => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        ref.current &&
        e.target instanceof HTMLDivElement &&
        !ref.current.contains(e.target as HTMLDivElement)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, ref]);

  return { isOpen, setIsOpen };
};

export default useClickOutside;
