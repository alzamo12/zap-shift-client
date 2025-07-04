import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import calculateCost from '../../utils/SendParcelUtils/CalculateCost';
import saveParcel from '../../utils/SendParcelUtils/saveParcel';
import generateTrackingId from '../../utils/SendParcelUtils/generateTrackingId';
import { useLoaderData } from 'react-router';
import { useEffect, useState } from 'react';

const AddParcelForm = () => {
    const { user } = useAuth();
    const [cities, setCities] = useState([]);
    const { register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm(
            {
                defaultValues: {
                    type: 'document',
                    senderName: user.displayName
                }
            }
        );
    const division = useLoaderData();
    useEffect(() => {
        fetch("/warehouses.json")
            .then(res => res.json())
            .then(data => {
                setCities(data)
                console.log(data)
            })
    }, [])


    const type = watch('type');
    const senderRegion = watch('senderRegion');
    const receiverRegion = watch('receiverRegion');
    const weight = watch('weight') || 0;

    const onSubmit = data => {
        const cost = calculateCost(type, weight);
        const trackingId = generateTrackingId();
        // setCostData({ ...data, cost });
        const coastData = {
            ...data,
            cost,
            creation_date: new Date(),
            tracking_id: trackingId
        };
        toast.custom(t => (
            <div className="alert shadow-lg flex justify-between items-center">
                <span>Delivery cost: <strong>${cost}</strong></span>
                <button onClick={() => { toast.dismiss(t.id); saveParcel(coastData); }} className="btn btn-sm btn-primary">Confirm</button>
            </div>
        ));
    };


    return (
        <div className="max-w-screen-2xl mx-auto p-4">
            <Toaster />
            <h1 className="text-3xl font-bold mb-1">Add Parcel</h1>
            <p className="text-gray-600 mb-6">Enter your parcel details</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Parcel Info */}
                <div className="space-y-4">
                    <div className="flex space-x-6">
                        <label className="flex items-center">
                            <input type="radio" value="document" {...register('type')} className="radio" />
                            <span className="ml-2">Document</span>
                        </label>
                        <label className="flex items-center">
                            <input type="radio" value="non-document" {...register('type')} className="radio" />
                            <span className="ml-2">Non-Document</span>
                        </label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label"><span className="label-text">Title</span></label>
                            <input type="text" {...register('title', { required: 'Title is required' })} className="input input-bordered" placeholder="Parcel Title" />
                            {errors.title && <span className="text-error mt-1">{errors.title.message}</span>}
                        </div>
                        {type === 'non-document' && (
                            <div className="form-control">
                                <label className="label"><span className="label-text">Weight (KG)</span></label>
                                <input type="number" {...register('weight', { valueAsNumber: true })} className="input input-bordered" placeholder="Parcel Weight" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Sender & Receiver Info */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sender */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-xl font-semibold mb-4">Sender Details</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {/* sender name and contact number */}
                            <div className='flex gap-2 w-full'>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className="label font-medium text-black">Sender Name</label>
                                    <input {...register("senderName")} type="text" className="input w-full" placeholder="Sender Name" />
                                </div>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className="label font-medium text-black">Contact Number</label>
                                    <input type="text" {...register('senderContact', { required: true })} placeholder="Contact" className="input input-bordered w-full" />
                                </div>
                            </div>
                            {/* sender region and service center */}
                            <div className='flex gap-2 w-full'>
                                {/*sender region */}
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className="label font-medium text-black">Sender Region</label>
                                    <select {...register('senderRegion', { required: true })} className="select select-bordered w-full">
                                        <option value="" disabled>Select Region</option>
                                        {division.map(r => <option key={r} value={r}>{r}</option>)}
                                    </select>
                                </div>
                                {/*sender service center */}
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className="label font-medium text-black">Service Ccenter</label>
                                    <select {...register('senderCenter', { required: true })} className="select select-bordered w-full" disabled={!senderRegion}>
                                        <option value="" disabled>Select Service Center</option>
                                        {senderRegion && cities?.filter(city => city.region === senderRegion)?.map(city => <option key={city.city} value={city.city}>{city.city}</option>)}
                                    </select>
                                </div>
                            </div>
                            {/* address & description */}
                            <textarea {...register('senderAddress', { required: true })} placeholder="Address" className="textarea textarea-bordered w-full h-24" />
                            <textarea {...register('pickupInstruction', { required: true })} placeholder="Pick up Instruction" className="textarea textarea-bordered w-full h-24" />
                        </div>
                    </div>

                    {/* Receiver */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-xl font-semibold mb-4">Receiver Details</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {/* Receiver name and contact number */}
                            <div className='flex gap-2 w-full'>
                                {/* receiver name */}
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className="label font-medium text-black">Receiver Name</label>
                                    <input {...register("receiverName")} type="text" className="input w-full" placeholder="Sender Name" />
                                </div>
                                {/* receiver contact */}
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className="label font-medium text-black">Contact Number</label>
                                    <input type="text" {...register('receiverContact', { required: true })} placeholder="Contact" className="input input-bordered w-full" />
                                </div>
                            </div>
                            {/* receiver region and center */}
                            <div className='flex gap-2 w-full'>
                                {/* receiver region */}
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className="label font-medium text-black">Receiver Name</label>
                                    <select {...register('receiverRegion', { required: true })} className="select select-bordered w-full">
                                        <option value="" disabled>Select Region</option>
                                        {division.map(r => <option key={r} value={r}>{r}</option>)}
                                    </select>
                                </div>
                                {/* receiver center */}
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className="label font-medium text-black">Contact Number</label>
                                    <select {...register('receiverCenter', { required: true })} className="select select-bordered w-full" disabled={!receiverRegion}>
                                        <option value="" disabled>Select Service Center</option>
                                        {receiverRegion && cities?.filter(city => city.region === receiverRegion)?.map(city => <option key={city.city} value={city.city}>{city.city}</option>)}
                                    </select>
                                </div>
                            </div>
                            {/* address and description */}
                            <textarea {...register('receiverAddress', { required: true })} placeholder="Address" className="textarea textarea-bordered w-full h-24" />
                            <textarea {...register('deliveryInstruction', { required: true })} placeholder="Delivery Instruction" className="textarea textarea-bordered w-full h-24" />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-wide btn-success">Proceed to Confirm Booking</button>
                </div>
            </form>
        </div>
    );
}

export default AddParcelForm
