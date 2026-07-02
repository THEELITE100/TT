import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, openEditModal }) => {
  const [filter, setFilter] = useState('All');

  const filteredTasks = tasks.filter(task => filter === 'All' ? true : task.status === filter);

  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        {['All', 'Pending', 'In Progress', 'Completed'].map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
              filter === status 
                ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.15)]' 
                : 'bg-surface-card text-text-dim border border-border-subtle hover:text-white hover:bg-surface-hover'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredTasks.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="col-span-full flex flex-col items-center justify-center py-20 border-2 border-border-subtle border-dashed rounded-3xl bg-surface-card/30"
            >
              <p className="text-text-dim text-sm font-medium">No tasks found. Time to relax.</p>
            </motion.div>
          ) : (
            filteredTasks.map(task => (
              <TaskItem 
                key={task._id} 
                task={task} 
                deleteTask={deleteTask} 
                openEditModal={openEditModal} 
              />
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TaskList;