/**
 * @typedef {Object} project
 * @property {string} title - Title of the project
 * @property {string} slug - The slug of the project — the last segment of the URL where the 
 *                           project will be located. Must be unique!
 * @property {string} startDate - String representation of the starting date for the project
 *                                format: mm/dd/yyyy
 * @property {string} dueDate - String representation of the due date for the project
 *                              format: mm/dd/yyyy
 * @property {string} status - The status of the project
 * @property {Object<number, string>} goals - Goals for the project. 
 *                                            key: goal number, 
 *                                            val: Goal string description
 * @property {Array<Object>} notes - Array of Note objects associated with this project
 * @property {Array<Object>} steps - Array of Step objects associated with this project
 *                                   note: it might be better to make this an object
 *                                   with the step's due date as the property key
 */
const Project = {
   title: '',
   slug: '',
   startDate: '',
   dueDate: '',
   completedDate: '',
   status: '',
   goals: {
      1: '',
      2: '',
      3: '',
      4: ''
   },
   notes: [],
   steps: []
};

const dummyProject = {
   title: 'First Project',
   slug: 'first-project',
   startDate: '03/13/2022',
   dueDate: '04/13/2022',
   completedDate: '',
   status: 'planning',
   goals: {
      1: 'Create some dummy data to work with.',
      2: '',
      3: '',
      4: ''
   },
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
      1: 'Create some dummy data to work with.',
      2: '',
      3: '',
      4: ''
   },
   notes: [],
   steps: []
};

const dummyProjects = [
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

export {ProjectService};