function GoalList({ goals, onEdit, onComplete }) {


    return (
        <div className="col-span-2 bg-zinc-300 p-4 ">
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id} className="border-2 border-lime-800 grid grid-cols-2 rounded-xl space-y-4 p-4 m-4" >
                        <div className="flex flex-row items-center space-x-4">
                            <p
                                className="border-2 border-lime-800 rounded-full w-12 h-12 p-4 flex justify-center items-center text-2xl"
                            >{goal.icon}</p>
                            <p>{goal.unitFreq} / <small>{goal.unitType}</small></p>
                            <button
                                onClick={() => onEdit(goal)}
                            >{goal.description}</button>
                        </div>

                        <div className="flex flex-row items-center space-x-4 grid grid-cols-2 content-between">
                            <p className="order-1">{goal.targetCompleted} of {goal.totalTarget}</p>
                            <div className="w-full bg-gray-200 rounded-full h-4 order-3 col-span-2">
                                <div
                                    className="bg-lime-900 h-4 rounded-full transition-all duration-500"
                                    style={{ width: `${Math.min((goal.targetCompleted / goal.totalTarget)*100, 100)}%` }}
                                ></div>
                            </div>
                            <button
                                onClick={() => onComplete(goal.id)}
                                className="bg-lime-800 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded items-center order-2"
                            >Completed</button>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GoalList; 