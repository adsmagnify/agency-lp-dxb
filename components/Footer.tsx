import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Adsmagnify. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-brand-600">Privacy Policy</a>
          <a href="#" className="hover:text-brand-600">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};