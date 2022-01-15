import React from "react";

const Sortbar = ({ order, setOrder, sort_by, setSort_by }) => {
    
    const handleOrder = () => {
        setOrder((currSort) => {
            return currSort === "ASC" ? "DESC" : "ASC";
        });
    };

    const handleSelect = (e) => {
        const { value } = e.target;
        setSort_by(value);
    };

    return (
        <div>
            <label id="sorting_lable" >Sort By</label>
            <select
                labelid="sorting_lable"
                id="sorting_select"
                value={sort_by}
                label="Sort By"
                onChange={handleSelect}>
                <option value="created_at">Date Posted</option>
                <option value="votes">Popularity</option>
                <option value="comment_count">Comments</option>
            </select>

            <button onClick={handleOrder}>{order === "ASC" ? " Ascending" : " Descending"}</button>
        </div>
    );
};

export default Sortbar;