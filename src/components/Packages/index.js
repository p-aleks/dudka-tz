import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createSelector} from "@reduxjs/toolkit";
import {
    addPackageAction,
    changeQueryAction,
    clearAddFormDataAction,
    toggleIsAddFormOpenAction
} from "../../store/reducer";
import './PackagesStyle.scss';
import PackagesTable from "../PackagesTable";

const Packages = () => {
    const dispatch = useDispatch();
    const queriedPackagesSelector = createSelector(
        (state) => [state.packages, state.query],
        ([packages, query]) => {
            return (
                query ?
                    packages.filter(entry => entry.client.toLowerCase().includes(query.toLowerCase()))
                    :
                    packages
            );
        }
    );
    const packages = useSelector(queriedPackagesSelector);
    const addFormData = useSelector(state => state.addFormData);
    const query = useSelector(state => state.query);

    const toggleAddForm = () => {
        dispatch(toggleIsAddFormOpenAction());
    };

    const addPackage = () => {
        function validateForm () {
            for (const key in addFormData) {
                if (addFormData[key]) {
                    return true;
                }
            }
            return false;
        }

        if (validateForm()) {
            dispatch(addPackageAction(addFormData));
            dispatch(clearAddFormDataAction());
        } else {
            alert('At least one field should be filled!');
        }
    };

    const changeQuery = (e) => {
        dispatch(changeQueryAction(e.target.value));
    };

    return (
        <div className="packages">
            <div className="search-wrapper">
                <label className="search-label" htmlFor="search-input">
                    <img className="search-icon" src="/img/searchIcon.svg" alt="search"/>
                    <input className="search-input" value={query} onChange={changeQuery} id="search-input" type="text"
                           placeholder="Search package, client or courier"/>
                </label>
            </div>
            <div className="heading">
                <h1>Packages</h1>
                <span className="entries">
                    {packages.length} entries
                </span>
            </div>
            <div className="packages-main">
                <button className="toggle-add-form-btn" onClick={toggleAddForm}>
                    <img src="/img/addBtn.svg" alt="add"/>
                </button>
                <PackagesTable
                    entries={packages}
                    addPackage={addPackage}
                />
            </div>
        </div>
    );
};

export default Packages;
