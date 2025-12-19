import { useEffect, useState } from 'react'
import Header from './Header/header.jsx'
import GoalList from './List/GoalsList.jsx'   
import Navigation from './Options/Navigation.jsx'
import Footer from './Footer/Footer.jsx'
import Modal from './Options/Modal.jsx'
import GoalForm from './Options/GoalForm.jsx'
import './App.css'

function App() {
  const [goals, setGoals] = useState(()=>{
    const savedGoals = localStorage.getItem('goals');
    if(savedGoals){
      return JSON.parse(savedGoals);
    }
    return [{
    id: 1, 
    icon: '📚',
    description: 'Create React Projects',
    unitFreq: 1, 
    unitType: 'month',
    targetCompleted: 3,
    totalTarget: 5,
    deadline: 'Jan 15th, 2026'
  }];
});

  useEffect(()=> {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () =>{
     setIsModalOpen(false);
     setGoalToEdit(null);
  };

  //Receiving inputs from GoalForm
  const hanldeSaveGoal = (newGoalData) => {
    if(goalToEdit){
      setGoals(goals.map(g=> g.id === goalToEdit.id ? 
        {...g, ...newGoalData}
        : g
      ));
    } else {
    const newGoal={
      id:goals.length +1,
      ...newGoalData
    };
    setGoals([...goals, newGoal]);
    }
    closeModal();
  }

  //Editing more
  const [goalToEdit, setGoalToEdit] = useState(null);
  const hanldeEdit = (goal) => {
    setGoalToEdit(goal);
    setIsModalOpen(true);
  }
  //Deliting gaol
  const handleDeleteGoal = (goalId) => {
    const updatedGoals = goals.filter(g => g.id !== goalId);
    setGoals(updatedGoals);
    closeModal();
  }

  //Completing goals counter
  const handleCompleteGoal = (goalId) => {
    setGoals(goals.map(g => 
      g.id === goalId && g.targetCompleted < g.totalTarget ?
      {...g, targetCompleted: g.targetCompleted + 1} : g
    ));
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>

      <main className="flex-grow w-full grid grid-cols-3 gap-4 gap-6">
        <Navigation 
        onOpen={openModal}
        />
        <GoalList
          goals = {goals}
          onEdit={hanldeEdit}
          onComplete={handleCompleteGoal}
        />
        <Modal 
        isOpen={isModalOpen}
        onClose={closeModal}
        >
          <GoalForm
          onSave={hanldeSaveGoal}
          initialData={goalToEdit}
          onClose={closeModal}
          onDelete={handleDeleteGoal}/>

          <button onClick={closeModal}>Close Modal</button>

        </Modal>
      </main>

      <Footer/>
    </div>
  )
}

export default App
