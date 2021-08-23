import React from 'react';
import PackageEntryRow from "./PackageEnrtyRow";
import './PackageTableStyle.scss';
import {useSelector} from "react-redux";
import AddPackageForm from "../AddPackageForm";

const PackagesTable = ({entries, addPackage}) => {
    const isAddFormOpen = useSelector(state => state.isAddFormOpen);

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                <tr className="table-head">
                    <th className="table-heading-id">ID</th>
                    <th className="table-heading-client">Client</th>
                    <th className="table-heading-pickup">Pickup Address</th>
                    <th className="table-heading-dropoff">Dropoff Address</th>
                    <th className="table-heading-courier">Courier</th>
                    <th className="table-heading-status">Status</th>
                </tr>
                </thead>
                <tbody className="table-entries">
                {
                    entries.map(entry => {
                        return (
                            <PackageEntryRow
                                entry={entry}
                            />
                        )
                    })
                }
                </tbody>
                <tbody className="table-add-form">
                {
                    isAddFormOpen &&
                    <AddPackageForm addPackage={addPackage}/>
                }
                </tbody>
            </table>
        </div>
    );
};

export default PackagesTable;
