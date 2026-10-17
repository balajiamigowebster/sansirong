import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DashboardHero from './DashboardHero';
import DashboardContent from './DashboardContent';
import DashboardSkill from './DashboardSkill';
import DashboardChart1 from './DashboardChart-1';
import DashboardWorkflow from './DashboardWorkflow';
import DashboardLevel from './DashboardLevel';
import DashboardDemo from './Dashboard-Demo';
import DashboardGeography from './DashboardGeography';
import DashboardManpower from './DashboardManpower';
import DashboardInterview from './DashboardInterview';
import DashboardExits from './DashboardExits';
import DashboardBirthday from './DashboardBirthday';

const Dashboard = () => {
  useEffect(() => {
    window.location.replace("https://sansirong-dashboard.netlify.app/");
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f7f9] flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 font-medium">Redirecting to Dashboard...</p>
      </div>
      {/* 
      <DashboardHero />
      <DashboardContent />
      <DashboardSkill />
      <DashboardChart1 />
      <DashboardWorkflow />
      <DashboardLevel />
      <DashboardDemo/>
      <DashboardGeography />
      <DashboardManpower/>   
      <DashboardInterview/>
      <DashboardExits />  
      <DashboardBirthday />
      */}
    </div>
  );
};

export default Dashboard;
