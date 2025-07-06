
const ParcelListTable = ({ parcels, handleDelete }) => {

    const formatDate = iso => {
        return new Date(iso).toLocaleDateString();
    }

    return (
        <div className="overflow-x-auto p-4">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Cost</th>
                        <th>Payment</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {parcels?.map((parcel, index) => (
                        <tr key={parcel._id}>
                            <td>{index+1}</td>
                            <td className="max-w-[180x] truncate">{parcel.title}</td>
                            <td className="capitalize">{parcel.type}</td>
                            <td>{formatDate(parcel.creation_date)}</td>
                            <td>৳{parcel.cost}</td>
                            <td>
                                {parcel.payment_status === 'paid' ? (
                                    <span className="badge badge-success">Paid</span>
                                ) : (
                                    <span className="badge badge-error">Unpaid</span>
                                )}
                            </td>
                            <td className="space-x-2">
                                <button className="btn btn-sm btn-ghost">View</button>
                                {parcel.payment_status === 'unpaid' && (
                                    <button className="btn btn-sm btn-primary text-black">Pay</button>
                                )}
                                <button onClick={() => handleDelete(parcel._id)} className="btn btn-sm btn-error">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ParcelListTable;
