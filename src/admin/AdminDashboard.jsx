import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';

const AdminDashboard = () => {
    const { currentStore } = useSelector(state => state.store)
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEditModalOpen, setEditModalOpen] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://dummyjson.com/products/${id}`);
            setProducts(products.filter((product) => product.id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setEditModalOpen(true);
    };

    const handleUpdate = async (values) => {
        try {
            const response = await axios.put(`https://dummyjson.com/products/${selectedProduct.id}`, values);
            setProducts(products.map((product) =>
                product.id === selectedProduct.id ? { ...product, ...response.data } : product
            ));
            setEditModalOpen(false);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">{currentStore.name}</h2>
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>Product Name</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>
                    <Table.HeadCell>Actions</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {products.map((product) => (
                        <Table.Row key={product.id}>
                            <Table.Cell>{product.title}</Table.Cell>
                            <Table.Cell>${product.price}</Table.Cell>
                            <Table.Cell>
                                <Button pill inline color="gray" onClick={() => handleEdit(product)}>
                                    <FaEdit size={20} color="green" />
                                </Button>
                                <Button pill color="gray" inline onClick={() => handleDelete(product.id)} className="ml-2">
                                    <FaTrash size={20} color="red" />
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            {selectedProduct && (
                <Modal show={isEditModalOpen} onClose={() => setEditModalOpen(false)}>
                    <Modal.Header className="text-center">Edit Product</Modal.Header>
                    <Modal.Body className="bg-slate-300 rounded">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Product Name</label>
                                <input
                                    type="text"
                                    value={selectedProduct.title}
                                    onChange={(e) => setSelectedProduct({ ...selectedProduct, title: e.target.value })}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Price</label>
                                <input
                                    type="number"
                                    value={selectedProduct.price}
                                    onChange={(e) => setSelectedProduct({ ...selectedProduct, price: Number(e.target.value) })}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <Button color="greenToBlue" pill className="w-full" onClick={() => handleUpdate(selectedProduct)}>
                                Update
                            </Button>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default AdminDashboard;
