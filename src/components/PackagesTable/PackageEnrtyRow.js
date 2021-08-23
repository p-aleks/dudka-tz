import React from 'react';

const PackageEntryRow = ({entry}) => {
    return (
        <tr>
            <td className="entry-id">#{entry.id}</td>
            <td>{entry.client}</td>
            <td>{entry.pickupAddress}</td>
            <td>{entry.dropoffAddress}</td>
            <td>{entry.courier}</td>
            <td>
                <span className="online">online</span>
            </td>
        </tr>
    );
};

export default PackageEntryRow;
