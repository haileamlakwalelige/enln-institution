import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import api from '../../api/api';

function FilterSidebar({ onFilter }) {
  const [isPriceDropdownOpen, setPriceDropdownOpen] = useState(false);
  const [isLevelsDropdownOpen, setLevelsDropdownOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState(null);
  const [selectedLevelFilter, setSelectedLevelFilter] = useState(null);

  const togglePriceDropdown = () => {
    setPriceDropdownOpen((prev) => !prev);
  };

  const toggleLevelsDropdown = () => {
    setLevelsDropdownOpen((prev) => !prev);
  };

  const { data: courses, isLoading, isError, error } = useQuery(['courses'], async () => {
    const res = await api.get('/courses');
    return res.data.data; // Assuming your API response is structured like this
  });

  useEffect(() => {
    if (courses) {
      setFilteredCourses(courses);
      // onFilter(courses); // Update parent component with all courses initially
    }
  }, [courses, onFilter]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Function to filter courses by price
  const filterCoursesByPrice = (priceType) => {
    let filteredData = courses;
    if (priceType === 'free') {
      filteredData = courses.filter(course => Number(course.price) == 0);
    } else if (priceType === 'paid') {
      filteredData = courses.filter(course => Number(course.price) > 0);
    } else {
      filteredData = courses; // Show all courses
    }
    setFilteredCourses(filteredData);
    setSelectedPriceFilter(priceType);
    setSelectedLevelFilter(null); // Reset level filter
    onFilter(filteredData); // Update parent component with filtered data
  };

  // Function to filter courses by level
  const filterCoursesByLevel = (level) => {
    let filteredData = [];
    if (level === 'All') {
      filteredData = courses; // Show all courses
    } else if(level === "Begginer") {
      filteredData = courses.filter(course => course.level === 'Begginer');
    }
    else if(level === "Intermidate") {
      filteredData = courses.filter(course => course.level === "Intermidate");
    }
    else if(level === "expert") {
      filteredData = courses.filter(course => course.level === "Expert");
    } else {
      filteredData = courses;
    }
    setFilteredCourses(filteredData);
    setSelectedLevelFilter(level);
    setSelectedPriceFilter(null); // Reset price filter
    onFilter(filteredData); // Update parent component with filtered data
  };

  // Function to reset filters
  const resetFilters = () => {
    setFilteredCourses(courses); // Show all courses
    setSelectedPriceFilter(null);
    setSelectedLevelFilter(null);
    onFilter(courses); // Update parent component with unfiltered data
  };

  return (
    <>
      <div className="mx-5 space-y-3 py-5">
        <h1 className="heading text-center lg:text-justify">All Leadership Courses</h1>
        <div className="ml-5 flex space-x-2 lg:mr-7 lg:justify-end">
          {/* Your filter UI */}
        </div>
        <h1 className='subheading mx-3'>Filter By</h1>
        <div className='flex flex-col'>
          <div className="relative lg:ml-5 inline-block lg:w-3/4 w-11/12 border-t-2 text-left">
            <div
              onClick={togglePriceDropdown}
              className="text inline-flex w-full justify-between bg-white px-4 py-2 font-bold focus:outline-none"
            >
              <span>Pricing</span>
              <svg
                className={`h-2.5 w-2.5 ${isPriceDropdownOpen ? 'transform rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </div>
            {isPriceDropdownOpen && (
              <div className="relative mt-2 w-full origin-top-right rounded-md bg-white pl-5 ring-1 ring-gray-300 py-2">
                <div className="mb-4 ml-3 flex items-center">
                  <input
                    id="free-checkbox"
                    type="checkbox"
                    checked={selectedPriceFilter == 'free'}
                    onChange={() => filterCoursesByPrice('free')}
                    className="h-4 w-4 rounded-sm border-gray-700 bg-white text-primary focus:ring-1 focus:ring-primary dark:border-gray-500 dark:bg-gray-100 dark:ring-offset-gray-500 dark:focus:ring-primary"
                  />
                  <label htmlFor="free-checkbox" className="smalltext ml-2">
                    Free ({courses.filter(course => Number(course.price) == 0).length})
                  </label>
                </div>
                <div className="mb-4 ml-3 flex items-center">
                  <input
                    id="paid-checkbox"
                    type="checkbox"
                    checked={selectedPriceFilter === 'paid'}
                    onChange={() => filterCoursesByPrice('paid')}
                    className="h-4 w-4 rounded-sm border-gray-700 bg-white text-primary focus:ring-1 focus:ring-primary dark:border-gray-500 dark:bg-gray-100 dark:ring-offset-gray-500 dark:focus:ring-primary"
                  />
                  <label htmlFor="paid-checkbox" className="smalltext ml-2">
                    Paid ({courses.filter(course => Number(course.price )> 0).length})
                  </label>
                </div>
                <div className="mb-4 ml-3 flex items-center">
                  <button
                    onClick={resetFilters}
                    className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="relative lg:ml-5 mt-2 inline-block lg:w-3/4 w-11/12 border-b-2 border-t-2 text-left">
            <div
              onClick={toggleLevelsDropdown}
              className="text inline-flex w-full justify-between bg-white px-4 py-2 font-bold focus:outline-none"
            >
              <span>Levels</span>
              <svg
                className={`h-2.5 w-2.5 ${isLevelsDropdownOpen ? 'transform rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </div>
            {isLevelsDropdownOpen && (
              <div className="relative mt-2 w-full origin-top-right rounded-md bg-white pl-5 ring-1 ring-gray-300 py-2">
                <div className="mb-4 ml-3 flex items-center">
                  <input
                    id="all-levels-checkbox"
                    type="checkbox"
                    checked={selectedLevelFilter === 'All'}
                    onChange={() => filterCoursesByLevel('All')}
                    className="h-4 w-4 rounded-sm border-gray-700 bg-white text-primary focus:ring-1 focus:ring-primary dark:border-gray-500 dark:bg-gray-100 dark:ring-offset-gray-500 dark:focus:ring-primary"
                  />
                  <label htmlFor="all-levels-checkbox" className="smalltext ml-2">
                    All ({courses.length})
                  </label>
                </div>
                <div className="mb-4 ml-3 flex items-center">
                  <input
                    id="beginner-checkbox"
                    type="checkbox"
                    checked={selectedLevelFilter === 'Begginer'}
                    onChange={() => filterCoursesByLevel('Begginer')}
                    className="h-4 w-4 rounded-sm border-gray-700 bg-white text-primary focus:ring-1 focus:ring-primary dark:border-gray-500 dark:bg-gray-100 dark:ring-offset-gray-500 dark:focus:ring-primary"
                  />
                  <label htmlFor="beginner-checkbox" className="smalltext ml-2">
                    Beginner ({courses.filter(course => course.level === 'Begginer').length})
                  </label>
                </div>
                <div className="mb-4 ml-3 flex items-center">
                  <input
                    id="intermediate-checkbox"
                    type="checkbox"
                    checked={selectedLevelFilter === 'Intermidate'}
                    onChange={() => filterCoursesByLevel('Intermidate')}
                    className="h-4 w-4 rounded-sm border-gray-700 bg-white text-primary focus:ring-1 focus:ring-primary dark:border-gray-500 dark:bg-gray-100 dark:ring-offset-gray-500 dark:focus:ring-primary"
                  />
                  <label htmlFor="intermediate-checkbox" className="smalltext ml-2">
                  Intermediate ({courses.filter(course => course.level === 'Intermidate').length})
                  </label>
                </div>
                <div className="mb-4 ml-3 flex items-center">
                  <input
                    id="expert-checkbox"
                    type="checkbox"
                    checked={selectedLevelFilter === 'expert'}
                    onChange={() => filterCoursesByLevel('expert')}
                    className="h-4 w-4 rounded-sm border-gray-700 bg-white text-primary focus:ring-1 focus:ring-primary dark:border-gray-500 dark:bg-gray-100 dark:ring-offset-gray-500 dark:focus:ring-primary"
                  />
                  <label htmlFor="expert-checkbox" className="smalltext ml-2">
                    Expert ({courses.filter(course => course.level === 'Expert').length})
                  </label>
                </div>
                <div className="mb-4 ml-3 flex items-center">
                  <button
                    onClick={resetFilters}
                    className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

FilterSidebar.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default FilterSidebar;
