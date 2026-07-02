import React, { useEffect } from 'react';

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-green-500/10 border-green-500/20 text-green-400';

  return (
    <div className={`fixed bottom-5 right-5 z-50 px-6 py-3 rounded-2xl border backdrop-blur-xl shadow-2xl transition-all duration-300 ${bgColor}`}>
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};

export default Notification;