import React from 'react';

const App = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", selected: false },
        { name: "CSS", selected: false },
        { name: "React", selected: false }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", selected: false },
        { name: "Express", selected: false },
        { name: "MongoDB", selected: false }
      ]
    },
    {
      category: "Cloud",
      items: [
        { name: "AWS", selected: false },
        { name: "Azure", selected: false },
        { name: "Google Cloud", selected: false }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto mt-8 p-6 bg-gray-800 rounded-xl shadow-lg">
        {skills.map((item, index) => (
          <div key={index} className="mb-6 border-b border-gray-700 pb-4 last:border-b-0 last:pb-0">
            <label className="flex items-center gap-2 font-semibold text-lg text-gray-100">
              <input type="checkbox" className="w-4 h-4 accent-blue-500" />
              Select All {item.category}
            </label>

            <div className="flex flex-col gap-2 mt-3 pl-6">
              {item.items.map((i, idx) => (
                <label
                  key={idx}
                  className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-2 py-1"
                >
                  <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                  {i.name}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
