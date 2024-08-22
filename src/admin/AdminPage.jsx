import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';
import AddProduct from './AddProduct';

const AdminPage = () => {
    const [products, setProducts] = useState([]);

    const handleProductAdded = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 font-mono underline">Admin Panel</h1>
            <AddProduct onProductAdded={handleProductAdded} />
            <AdminDashboard products={products} />
        </div>
    );
};

export default AdminPage;
