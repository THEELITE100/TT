import React from 'react';
import { Pencil, Trash2, CheckCircle2, Circle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const TaskItem = ({ task, deleteTask, openEditModal }) => {
  
  const getStatusIcon = () => {
    if (task.status === 'Completed') return <CheckCircle2 size={18} className="text-green-500" />;
    if (task.status === 'In Progress') return <Clock size={18} className="text-orange-400" />;
    return <Circle size={18} className="text-text-dim" />;
  };

  const getPriorityColor = () => {
    if (task.priority === 'High') return 'text-red-400 bg-red-400/10 border-red-400/20';
    if (task.priority === 'Medium') return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    return 'text-green-400 bg-green-400/10 border-green-400/20';
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      whileHover={{ y: -4 }}
      className="group bg-surface-card border border-border-subtle rounded-3xl p-5 flex flex-col justify-between h-full hover:border-text-dim transition-colors shadow-sm relative overflow-hidden"
    >
      <div className={`absolute -top-10 -right-10 w-24 h-24 blur-3xl opacity-20 rounded-full pointer-events-none ${task.priority === 'High' ? 'bg-red-500' : task.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'}`} />

      <div>
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="pt-0.5">
            {getStatusIcon()}
          </div>
          <div className="flex gap-1.5 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={() => openEditModal(task)} 
              className="p-1.5 text-text-dim hover:text-white hover:bg-surface-dark rounded-md transition-colors"
            >
              <Pencil size={14} />
            </button>
            <button 
              onClick={() => deleteTask(task._id)} 
              className="p-1.5 text-text-dim hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>

        <h3 className={`text-lg font-medium leading-tight mb-2 transition-all duration-300 ${task.status === 'Completed' ? 'line-through text-text-dim' : 'text-white'}`}>
          {task.title}
        </h3>
        
        {task.description && (
          <p className="text-sm text-text-dim line-clamp-3 leading-relaxed mb-4">
            {task.description}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-subtle/50">
        <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-md border ${getPriorityColor()}`}>
          {task.priority}
        </span>
        <span className="text-[11px] text-text-dim font-medium">
          {new Date(task.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
        </span>
      </div>

    </motion.div>
  );
};

export default TaskItem;