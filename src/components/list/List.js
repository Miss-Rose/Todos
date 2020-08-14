import React from "react";
import ListItem from "../list-item";


const List = ({list, onDelete, onImportant, onDone}) => {

    const elements = list.map(i => {
        return (
            <div key={i.id} className='bg-dark text-white p-1 m-2'>
                <ListItem
                    item={i}
                    onDelete={() => onDelete(i.id)}
                    onImportant={() => onImportant(i.id)}
                    onDone={() => onDone(i.id)}
                />
            </div>
        )
    });
    return (
        <div>
            {elements}
        </div>
    )

};

export default List;