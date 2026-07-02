import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';

const API_URL = 'https://tt-8y4c.onrender.com/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const saveTask = async (taskData) => {
    try {
      if (editingTask) {
        await fetch(`${API_URL}/${editingTask._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(taskData)
        });
      } else {
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(taskData)
        });
      }
      fetchTasks();
      closeModal();
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingTask(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-surface-dark px-4 py-8 md:py-12 selection:bg-white selection:text-black font-sans">
      <div className="max-w-5xl mx-auto">
        
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Focus</h1>
            <p className="text-text-dim text-sm md:text-base mt-1">Manage your workflow</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
            New Task
          </button>
        </header>

        <TaskStats tasks={tasks} />

        <TaskList tasks={tasks} deleteTask={deleteTask} openEditModal={openEditModal} />

        <AnimatePresence>
          {isModalOpen && (
            <TaskForm 
              saveTask={saveTask} 
              editingTask={editingTask} 
              closeModal={closeModal} 
            />
          )}
        </AnimatePresence>
        
      </div>
    </div>
  );
}

export default App;