/* VENDOR */
import { useState } from "react";
import { useSelector } from "react-redux";

/* APPLICATION */
import edit from "../icons/edit.svg";
import remove from "../icons/remove.svg";
import { selectAllCategories } from "../features/categoriesSlice";
import { ModalEditItem } from "../Modal/ModalEditItem";
import { ModalRemoveItem } from "../Modal/ModalRemoveItem";

interface ListItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const categories = useSelector(selectAllCategories),
    [editModalActive, setEditModalActive] = useState(false)
  let [removeModalActive, setRemoveModalActive] = useState(false);//TODO const

  return (
    <>
      <li className="list-item">
        <div className="list-item-col1">
          <div className="list-item-col1-row1">
            <h3 className="list-item-col1-row1__title">{item.name}</h3>
            {item.category && (
              <span className="list-item-col1-row1__category">
                {
                  categories.find((category) => category.id === item.category)//TODO в стэйте категории в виде обьекта id, name d vfccbdt o(n) а в обьекте о(1)
                    ?.name
                }
              </span>
            )}
          </div>
          <div className="list-item-col1-row2">{item.description}</div>
        </div>
        <div className="list-item-col2">
          <button
            className="list-item-col2__btn"
            onClick={() => {
              setEditModalActive(true);
            }}
          >
            <img src={edit} alt="edit" />
          </button>
          <button
            className="list-item-col2__btn"
            onClick={() => {
              removeModalActive = true;//TODO set
            }}
          >
            <img src={remove} alt="remove" />
          </button>
        </div>
        <ModalEditItem
          item={item}
          active={editModalActive}
          setActive={setEditModalActive}
        />
        <ModalRemoveItem
          item={item}
          active={removeModalActive}
          setActive={setRemoveModalActive}
        />
      </li>
    </>
  );
};
