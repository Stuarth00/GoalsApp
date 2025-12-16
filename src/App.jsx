import { useState } from 'react'
import Header from './Header/header.jsx'
import GoalList from './List/GoalsList.jsx'   
import Navigation from './Options/Navigation.jsx'
import Footer from './Footer/Footer.jsx'
import Modal from './Options/Modal.jsx'
import './App.css'

function App() {
  const [goals, setGoals] = useState([{
    id: 1, 
    icon: '📚',
    description: 'Create React Projects',
    unitFreq: 1, 
    unitType: 'month',
    targetCompleted: 3,
    totalTarget: 5,
    deadline: 'Jan 15th, 2026'
  }
  ]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>

      <main className="flex-grow w-full grid grid-cols-3 gap-4 gap-6">
        <Navigation 
        onOpen={openModal}
        />
        <GoalList
          goals = {goals}
        />
        <Modal 
        isOpen={isModalOpen}
        onClose={closeModal}
        >
          <h2>Modal content</h2>
          <button onClick={closeModal}>Close Modal</button>

        </Modal>
      </main>

      <Footer/>
    </div>
  )
}

export default App
