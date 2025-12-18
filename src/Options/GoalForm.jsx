import { useEffect, useState } from 'react';

function GoalForm({ onSave, onClose, initialData }) {
    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData(
                {
                    description: '',
                    unitFreq: '',
                    unitType: '',
                    targetCompleted: '',
                    totalTarget: '',
                    icon: ''
                }
            );
        }
    }, [initialData]);

    const [formData, setFormData] = useState({
        description: '',
        unitFreq: '',
        unitType: '',
        targetCompleted: '',
        totalTarget: '',
        icon: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
        setFormData({
            description: '',
            unitFreq: '',
            unitType: '',
            targetCompleted: '',
            totalTarget: '',
            icon: ''
        })
    }


    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h3>
                {initialData ? "Edit the selected goal" : "Add a new goal"}</h3>
            <label >Description</label>
            <input
                type="text"
                name="description"
                placeholder="Goal Description"
                value={formData.description}
                onChange={handleChange}
                className="border p-2 rounded"
                required />

            <label >How many times do you want to achieve this goal?</label>
            <input
                name="unitFreq"
                placeholder="e.g 3"
                value={formData.unitFreq}
                onChange={handleChange}
                className="border p-2 rounded"
                required
            />
            <select
                name="unitType"
                value={formData.unitType}
                onChange={handleChange}
                className='border p-2 rounded'
                required>
                <option value="" disabled>select an option</option>
                <option value="day">Daily</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
            </select>

            <label >How many times you have achieved this goal up to now?</label>
            <input
                type="text"
                name="targetCompleted"
                placeholder='e.g 3'
                value={formData.targetCompleted}
                onChange={handleChange}
                className='border p-2 rounded'
                required />

            <label >How many times you want to achieve this goal?</label>
            <input
                type="text"
                name='totalTarget'
                placeholder='e.g. 10'
                onChange={handleChange}
                value={formData.totalTarget}
                className='border p-2 '
                required />

            <label >Select the icon for this goal</label>
            <select
                name="icon"
                value={formData.icon}
                onChange={handleChange}
                className='border p-2 rounded text-2xl'
                required>
                <option value="" disabled>select an icon</option>
                <option value="📖">📖</option>
                <option value="🎯">🎯</option>
                <option value="🏋️">🏋️</option>
                <option value="🔕">🔕</option>
                <option value="🥊">🥊</option>
                <option value="🧑‍💻">🧑‍💻</option>
            </select>

            <button type="submit" className="bg-lime-800 text-white p-2 rounded">
                {initialData ? "Save your goal" : "Create your goal"}
            </button>
            {initialData ?
                <button type="submit" className="bg-indigo-800 text-white p-2 rounded">
                    Delete Goal
                </button> : null}

        </form>
    )
}

export default GoalForm;