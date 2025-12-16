import { useState } from 'react'; 

function GoalForm({ onAdd, onClose}) {
    const [formData, setFormData] = useState({
        description: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        onAdd(formData);
        onClose();
    }


    return (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3>Add a new goal</h3>
                <label htmlFor="">Description</label>
                <input 
                type="text"
                name="description"
                placeholder="Goal Description"
                value={FormData.description}
                onChange={handleChange}
                className="border p-2 rounded"
                required />

                <button type="submit" className="bg-lime-800 text-white p-2 rounded">
                    Save Goal
                </button>
            </form>
    )
}

export default GoalForm;