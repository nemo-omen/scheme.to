const dummyProject = {
   title: 'First Project',
   slug: 'first-project',
   startDate: '03/13/2022',
   dueDate: '04/13/2022',
   completedDate: '',
   status: 'planning',
   goals: {
      1: 'Create some dummy data.',
      2: '',
      3: '',
      4: ''
   },
   tags: [],
   notes: [],
   steps: []
};

const dummyProject2 = {
   title: 'Second Project',
   slug: 'second-project',
   startDate: '03/13/2022',
   dueDate: '04/14/2022',
   completedDate: '',
   status: 'planning',
   goals: {
      1: 'Create some dummy data.',
      2: '',
      3: '',
      4: ''
   },
   tags: [],
   notes: [],
   steps: []
};

const dummyProject3 = {
   title: 'Third Project',
   slug: 'third-project',
   startDate: '03/13/2022',
   dueDate: '04/11/2022',
   completedDate: '',
   status: 'planning',
   goals: {
      1: 'Create some dummy data.',
      2: '',
      3: '',
      4: ''
   },
   tags: [],
   notes: [],
   steps: []
};

const currentDate = new Date();
const futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 31);

let defaultProject = {
   title: 'Untitled',
   slug: 'untitled-project',
   startDate: currentDate.toLocaleDateString(),
   dueDate: futureDate.toLocaleDateString(),
   completedDate: '',
   status: 'planning',
   goals: {
      1: '',
      2: '',
      3: '',
      4: ''
   },
   tags: ['Getting Started', 'Big Dreams'],
   notes: [],
   steps: []
};

let dummyProjects = [
   dummyProject,
   dummyProject2,
   dummyProject3
];

export {defaultProject, dummyProject};