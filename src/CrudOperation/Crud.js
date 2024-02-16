
import React, { useState } from "react";

const Crud = () => {
    const [users, setUsers] = useState([]); // State to store users

    // State to store input values
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // State to track the index of the user being edited
    const [editIndex, setEditIndex] = useState(null);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            // If editing, update the user at the editIndex
            const updatedUsers = [...users];
            updatedUsers[editIndex] = { name, email, password };
            setUsers(updatedUsers);
            // Reset editIndex to null
            setEditIndex(null);
        } else {
            // If not editing, add a new user to the users state
            setUsers([...users, { name, email, password }]);
        }
        // Clear input fields
        setName("");
        setEmail("");
        setPassword("");
    };

    // Function to handle user deletion
    const handleDelete = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
    };

    // Function to handle user editing
    const handleEdit = (index) => {
        const userToEdit = users[index];
        setName(userToEdit.name);
        setEmail(userToEdit.email);
        setPassword(userToEdit.password);
        setEditIndex(index);
    };

    return (
        <>
            <div className="container pt-5">
                <div className="row col-sm-6 mx-auto px-3 py-4 bg-light">
                    <h2 className="text-center">{editIndex !== null ? "Edit User" : "Add User"}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="col-sm-12">
                            <label>Enter the Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <label>Enter the Email</label>
                            <input
                                type="text"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label>Enter the Password</label>
                            <input
                                type="text"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn btn-primary mt-2">
                                {editIndex !== null ? "Update User" : "Add User"}
                            </button>
                        </div>
                    </form>
                </div>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map through users array to display each user */}
                        {users.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => handleEdit(index)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(index)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Crud;
