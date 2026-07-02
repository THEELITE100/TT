import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Circle, LayoutList } from 'lucide-react';

const StatCard = ({ title, count, icon: Icon, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4, ease: "easeOut" }}
    className="bg-surface-card border border-border-subtle p-5 rounded-2xl flex items-center justify-between hover:border-text-dim transition-colors"
  >
    <div>
      <p className="text-text-dim text-xs font-medium uppercase tracking-wider mb-1">{title}</p>
      <h4 className="text-3xl font-semibold text-white">{count}</h4>
    </div>
    <div className={`p-3 rounded-full bg-surface-dark border border-border-subtle ${color}`}>
      <Icon size={24} />
    </div>
  </motion.div>
);

const TaskStats = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === 'Completed').length;
  const inProgress = tasks.filter(t => t.status === 'In Progress').length;
  const pending = tasks.filter(t => t.status === 'Pending').length;
  
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="mb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total" count={total} icon={LayoutList} color="text-white" delay={0.1} />
        <StatCard title="Pending" count={pending} icon={Circle} color="text-blue-400" delay={0.2} />
        <StatCard title="Active" count={inProgress} icon={Clock} color="text-orange-400" delay={0.3} />
        <StatCard title="Done" count={completed} icon={CheckCircle2} color="text-green-400" delay={0.4} />
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5 }}
        className="bg-surface-card border border-border-subtle p-4 rounded-2xl flex items-center gap-4"
      >
        <span className="text-sm font-medium min-w-[40px]">{progress}%</span>
        <div className="flex-1 h-2 bg-surface-dark rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-white rounded-full"
          />
        </div>
        <span className="text-xs text-text-dim uppercase tracking-wider">Completion</span>
      </motion.div>
    </div>
  );
};

export default TaskStats;