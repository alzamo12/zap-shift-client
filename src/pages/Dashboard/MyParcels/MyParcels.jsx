import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner/LoadingSpinner';
import ParcelListTable from '../../../components/dashboard/MyParcelPage/ParcelListTable';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    const { data: parcels = [], isLoading } = useQuery({
        queryKey: ['my-parcel', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
            return res.data
        },
    });

    const { mutateAsync } = useMutation({
        mutationFn: async (id) => {
            const res = await axiosSecure.delete(`/parcel/${id}`);
            return res.data
        },
        onMutate: () => {
            toast.loading('Deleting parcel...', { id: 'delete' });
        },
        onSuccess: (data, id) => {
            if (data.deletedCount > 0) {
                toast.success('Parcel deleted!');
                queryClient.invalidateQueries(['parcel', id]);
            } else {
                toast.error('No parcel was deleted.');
            }
        },
        onError: () => {
            toast.error('Failed to delete parcel.');
        },
        onSettled: () => {
            toast.dismiss("delete")
        }
    })
    console.log('these are my parcels', parcels);

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?'
            , text: "You won't be able to revert this!"
            , icon: 'warning'
            , showCancelButton: true
            , confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            mutateAsync(id)
        }
    };

    if (isLoading) return <LoadingSpinner />

    return (
        <div className=''>
            <h2 className="card-title">These are my parcels: {parcels?.data?.length}</h2>
            <ParcelListTable handleDelete={handleDelete} parcels={parcels?.data} />
        </div>
    );
};

export default MyParcels;