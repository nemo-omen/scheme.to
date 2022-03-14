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

const currentDate = new Date();
const futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 31)

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
   tags: [],
   notes: [],
   steps: []
}

let dummyProjects = [
   dummyProject,
   dummyProject2
];

const ProjectService = (function () {

   // just aliasing so I can switch out for real data later
   const projects = dummyProjects;

   const create = function (project) {
      projects.push(project);
   };

   const getAll = function (){
      return projects;
   };

   const get = function (slug) {
      return projects.filter((project) => project.slug === slug);
   };

   const update = function (newProject) {
      let oldProject = projects.find((project) => project.slug === newProject.slug);
      oldProject = [...newProject];
   };

   const remove = function (slug) {
      projects = projects.filter((project) => project.slug !== slug);
   };

   return {
      create,
      getAll,
      get,
      update,
      remove
   };
   
}());

export {ProjectService, defaultProject};