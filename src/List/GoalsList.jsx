function GoalList({ goals }) {

    return (
        <div className="col-span-2 bg-zinc-300 p-4">
            <ul className="border-2 border-lime-800 rounded-xl space-y-4 p-8">
                {goals.map((goal) => (
                    <li key={goal.id} className="grid grid-cols-2 " >
                        <div className="flex flex-row items-center space-x-4">
                            <p
                             className="border-2 border-lime-800 rounded-full w-12 h-12 p-4 flex justify-center items-center text-2xl"
                            >{goal.icon}</p>
                            <p>{goal.unitFreq} / <small>{goal.unitType}</small></p>
                            <p>{goal.description}</p>
                        </div>

                        <div className="flex flex-row items-center space-x-4">
                            <p>{goal.targetCompleted} of {goal.totalTarget}</p>
                            <p>Deadline: {goal.deadline}</p>
                            <button
                                className="bg-lime-800 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded"
                            >Completed</button>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GoalList; 