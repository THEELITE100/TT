import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

const TaskForm = ({ saveTask, editingTask, closeModal }) => {
  const [task, setTask] = useState({ 
    title: '', 
    description: '', 
    priority: 'Medium', 
    status: 'Pending' 
  });

  useEffect(() => {
    if (editingTask) setTask(editingTask);
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;
    saveTask(task);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 md:p-0">
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        className="relative bg-surface-card border border-border-subtle w-full max-w-md rounded-3xl p-6 md:p-8 shadow-2xl z-10 w-full mb-4 md:mb-0"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold tracking-tight text-white">
            {editingTask ? 'Edit Task' : 'Create Task'}
          </h2>
          <button 
            onClick={closeModal} 
            className="p-2 bg-surface-dark rounded-full text-text-dim hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-text-dim uppercase tracking-wider ml-1">Title</label>
            <input 
              autoFocus
              type="text" 
              placeholder="What needs to be done?" 
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              className="w-full bg-surface-dark border border-border-subtle rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-text-dim/50"
            />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-text-dim uppercase tracking-wider ml-1">Description</label>
            <textarea 
              placeholder="Add details (optional)" 
              rows="3"
              value={task.description}
              onChange={(e) => setTask({ ...task, description: e.target.value })}
              className="w-full bg-surface-dark border border-border-subtle rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all resize-none placeholder:text-text-dim/50"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-text-dim uppercase tracking-wider ml-1">Priority</label>
              <select 
                value={task.priority} 
                onChange={(e) => setTask({ ...task, priority: e.target.value })}
                className="w-full bg-surface-dark border border-border-subtle rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white appearance-none cursor-pointer"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-text-dim uppercase tracking-wider ml-1">Status</label>
              <select 
                value={task.status} 
                onChange={(e) => setTask({ ...task, status: e.target.value })}
                className="w-full bg-surface-dark border border-border-subtle rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white appearance-none cursor-pointer"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-white text-black font-semibold py-4 rounded-2xl mt-2 hover:bg-gray-200 transition-colors active:scale-[0.98] shadow-lg"
          >
            {editingTask ? 'Save Changes' : 'Create Task'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default TaskForm;