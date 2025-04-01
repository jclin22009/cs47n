"use client";
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Moon, Sun, CalendarDays, Users, BookOpen, Trophy, Map } from 'lucide-react';

// Course schedule data
const scheduleData = [
  { week: 1, topic: "Introductions & Data Dive-In / Whirlwind Tour", assignment: "Baseball Prediction Challenge" },
  { week: 2, topic: "Women's Soccer Coach / Spreadsheet Analysis", assignment: "Problem Set #1 (Soccer)" },
  { week: 3, topic: "Men's Basketball Coach / Tableau Desktop", assignment: "Problem Set #2 (Basketball)" },
  { week: 4, topic: "Football Coach / Tableau Prep", assignment: "Problem Set #3 (Football)" },
  { week: 5, topic: "Baseball Coach / SQL Analysis", assignment: "Problem Set #4 (Track)" },
  { week: 6, topic: "Track & Field Coach / SF Giants Game Planning", assignment: "Personal Project Proposals" },
  { week: 7, topic: "SF Giants Field Trip / Python-Pandas", assignment: "SF Giants Data Analysis" },
  { week: 8, topic: "Men's Golf Coach / Machine Learning", assignment: "Personal Projects" },
  { week: 9, topic: "Women's Gymnastics Coach / Project Presentations", assignment: "Project Presentations" },
  { week: 10, topic: "Project Presentations / Prize Ceremony", assignment: "Final Project Writeup" }
];

// Sports distribution data for visualization
const sportsData = [
  { name: "Soccer", count: 1 },
  { name: "Basketball", count: 1 },
  { name: "Football", count: 1 },
  { name: "Baseball", count: 1 },
  { name: "Track & Field", count: 1 },
  { name: "Golf", count: 1 },
  { name: "Gymnastics", count: 1 }
];

// Tools distribution data for visualization
const toolsData = [
  { name: "Spreadsheets", count: 1 },
  { name: "Tableau Desktop", count: 1 },
  { name: "Tableau Prep", count: 1 },
  { name: "SQL", count: 1 },
  { name: "Python/Pandas", count: 1 },
  { name: "Machine Learning", count: 1 }
];

const CS47NLandingPage = () => {
  // const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState('overview');
  
  // useEffect(() => {
  //   const root = window.document.documentElement;
  //   root.classList.remove('light', 'dark');
  //   root.classList.add(theme);
  // }, [theme]);
  
  return (
    <div className="min-h-screen p-4 md:p-8 bg-background text-foreground">
      
      
      {/* Hero Section */}
      <div className="mb-8 border-4 border-blue-200 dark:border-blue-900 rounded-lg overflow-hidden">
        <div className="p-6 pb-2 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            CS47N: Datathletics
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mt-2">
            Diving into Data Analytics and Stanford Sports
          </p>
        </div>
        <div className="p-6 pt-2 text-center">
          <p className="text-lg mb-4">Spring 2025 | Tuesdays & Thursdays 1:30-2:50 PM | Sapp Center (STLC) 105</p>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center"
            onClick={() => window.open('https://docs.google.com/document/d/1lZia1w3vK5maRN2Gr2msON_cLzUbcJH6cBZN4x4VW1U/edit', '_blank')}
          >
            <BookOpen className="mr-2 h-4 w-4" /> View Full Syllabus
          </button>
        </div>
      </div>
      
      {/* Main Content Tabs */}
      <div className="mb-8">
        <div className="flex border-b mb-4">
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'overview' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'schedule' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('schedule')}
          >
            Schedule
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'instructors' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('instructors')}
          >
            Instructors
          </button>
        </div>
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="text-lg font-medium">Course Description</h3>
              </div>
              <div className="p-4">
                <p className="mb-4">
                  This immersive seminar combines extensive hands-on data analytics with a first-hand peek into Stanford athletics. 
                  Class meetings alternate between instruction in various tools and techniques for data analysis and guest lectures by Stanford athletics coaches.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="border rounded-lg p-4">
                    <div className="text-center">
                      <BookOpen className="h-5 w-5 mb-1 mx-auto" />
                      <h4 className="font-medium">Learn Data Tools</h4>
                    </div>
                    <p className="text-center text-sm mt-2">
                      Master spreadsheets, Tableau, SQL, Python, and machine learning techniques
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="text-center">
                      <Users className="h-5 w-5 mb-1 mx-auto" />
                      <h4 className="font-medium">Meet Coaches</h4>
                    </div>
                    <p className="text-center text-sm mt-2">
                      Engage with Stanford coaches from seven different sports programs
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="text-center">
                      <Trophy className="h-5 w-5 mb-1 mx-auto" />
                      <h4 className="font-medium">Apply Analytics</h4>
                    </div>
                    <p className="text-center text-sm mt-2">
                      Complete hands-on problem sets and a personal data project
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="text-lg font-medium">Field Trip Highlight</h3>
              </div>
              <div className="p-4">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 mb-4 md:mb-0 md:mr-4">
                    <p>
                      In Week 7 (May 13), we'll take a field trip to watch the SF Giants baseball game. We'll collect our own data 
                      and analyze it using Python-Pandas in the following class. This real-world experience bridges the gap 
                      between classroom learning and practical application.
                    </p>
                  </div>
                  <div className="md:w-1/3 flex justify-center">
                    <Map className="h-24 w-24 text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 border-t bg-gray-50 dark:bg-gray-800 text-sm text-gray-500">
                No background in statistics or data analysis needed, but basic programming skills expected
              </div>
            </div>
          </div>
        )}
        
        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="border rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium">10-Week Course Schedule</h3>
            </div>
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Week</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Topics</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Assignment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {scheduleData.map((week, index) => (
                      <tr key={week.week} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : ''}>
                        <td className="px-4 py-3 text-sm font-medium">{week.week}</td>
                        <td className="px-4 py-3 text-sm">{week.topic}</td>
                        <td className="px-4 py-3 text-sm">{week.assignment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* Instructors Tab */}
        {activeTab === 'instructors' && (
          <div className="border rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium">Instructors & Office Hours</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg overflow-hidden">
                  <div className="p-3 border-b bg-gray-50 dark:bg-gray-800">
                    <h4 className="font-medium">Professor</h4>
                  </div>
                  <div className="p-4">
                    <p className="font-medium">Prof. (Dean) Jennifer Widom</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Office Hours: Wednesdays 4-5pm
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Location: Huang Engineering Center room 226
                    </p>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="p-3 border-b bg-gray-50 dark:bg-gray-800">
                    <h4 className="font-medium">Assistant</h4>
                  </div>
                  <div className="p-4">
                    <p className="font-medium">Jason Lin</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Office Hours: By appointment
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Contact: jasoncl@stanford.edu
                    </p>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="p-3 border-b bg-gray-50 dark:bg-gray-800">
                    <h4 className="font-medium">Assistant</h4>
                  </div>
                  <div className="p-4">
                    <p className="font-medium">Sam Benabou</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Office Hours: By appointment
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Contact: sbenabou@stanford.edu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Visualizations Tab */}
        {activeTab === 'visualizations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="text-lg font-medium">Sports Distribution</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Guest coaches from 7 different sports</p>
              </div>
              <div className="p-4 h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sportsData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="text-lg font-medium">Data Tools Coverage</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Learn 6 essential data analytics tools</p>
              </div>
              <div className="p-4 h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={toolsData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>CS47N - Spring 2025 - Stanford University</p>
        <p className="mt-1">
          <span className="inline-flex items-center">
            <BookOpen className="h-3 w-3 mr-1" />
            <a 
              href="https://docs.google.com/document/d/1lZia1w3vK5maRN2Gr2msON_cLzUbcJH6cBZN4x4VW1U/edit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Full Syllabus
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default CS47NLandingPage;