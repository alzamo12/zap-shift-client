import toast from "react-hot-toast";

const saveParcel = async (data) => {
    // console.log(data)
    const payload = { ...data, creation_date: new Date() };
    console.log('Saving parcel', payload);
    toast.success('Parcel saved successfully!');
};
export default saveParcel