import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'flowbite-react';

const ProductSchema = Yup.object().shape({
    title: Yup.string().required('Product Name is required'),
    price: Yup.number().required('Price is required'),
});

const AddProduct = ({ onProductAdded }) => {
    const handleSubmit = async (values, { resetForm }) => {
        try {
            const response = await axios.post('https://dummyjson.com/products', values);
            console.log('Product added:', response.data);
            onProductAdded(response.data);
            resetForm();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-slate-200 rounded-md shadow-md">
            <h2 className="text-2xl text-gray-800 font-bold mb-4">Add New Product</h2>
            <Formik
                initialValues={{ title: '', price: '' }}
                validationSchema={ProductSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Product Name</label>
                        <Field
                            name="title"
                            placeholder="Product Name"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <Field
                            name="price"
                            placeholder="Price"
                            type="number"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage name="price" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <Button type="submit" gradientMonochrome="lime" className="w-full">
                        Add Product
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default AddProduct;
