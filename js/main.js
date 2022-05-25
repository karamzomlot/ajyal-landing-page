const navFilters = document.querySelectorAll(".nav-filter");
const courses = document.querySelectorAll(".single-course");
const filterCourses = (e) => {
  e.preventDefault();
  const filter = e.target.dataset.filter;
  // Add active class to the clicked filter
  navFilters.forEach((navFilter) => navFilter.classList.remove("active"));
  e.target.classList.add("active");
  // Hide all courses
  courses.forEach((course) => course.classList.remove("show"));
  // Show courses based on filter
  Array.from(courses).filter(course => course.classList.contains(filter)).forEach((course) => course.classList.add("show"));
};
navFilters.forEach((navFilter) => navFilter.addEventListener("click", filterCourses));