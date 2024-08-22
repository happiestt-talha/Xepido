import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { createStore } from '../store/store/storeSlice';
import { useNavigate } from 'react-router-dom';

const StoreSchema = Yup.object().shape({
    name: Yup.string().required('Store Name is required'),
    description: Yup.string().required('Description is required'),
});

const CreateStore = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentStore } = useSelector((state) => state.store)
    console.log('Created store: ', currentStore)
    const handleSubmit = (values, { resetForm }) => {
        try {
            console.log('Values: ', values)
            dispatch(createStore(values))
            resetForm();
            navigate('/admin')
        } catch (error) {
            console.error('Error creating store:', error);
        }
    };

    return (
        <div className='max-w-md mx-auto p-10'>
            <div className="max-w-md mx-auto p-4 bg-slate-200 dark:bg-gray-500 rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-4">Create Store</h2>
                <Formik
                    initialValues={{ name: '', description: '' }}
                    validationSchema={StoreSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium ">Store Name</label>
                            <Field
                                name="name"
                                placeholder="Store Name"
                                className="mt-1 block w-full text-gray-800 p-2 border border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium ">Description</label>
                            <Field
                                name="description"
                                placeholder="Description"
                                as="textarea"
                                className="mt-1 block w-full text-gray-800 p-2 border border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <Button type="submit" gradientMonochrome="lime" className="w-full">
                            Create Store
                        </Button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default CreateStore;
