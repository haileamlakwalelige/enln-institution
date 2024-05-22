import { useEffect, useState } from 'react';
import FilterSidebar from '../components/categories/FilterSidebar';
import AllCoursesList from '../components/categories/AllCoursesList';
import axios from 'axios';
import { useQuery } from 'react-query';
// import axios from 'axios'; // Import axios if needed

function Categories() {
  let [filteredCourses, setFilteredCourses] = useState([]); // State to hold filtered courses

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component is mounted
  }, []);

  const { data: courses, isLoading, isError, error } = useQuery(['courses'], async () => {
    const res = await axios.get('https://orginalenlndashboard.redshiftbusinessgroup.com/api/courses');
    return res.data.data; // Assuming your API response is structured like this
  });

  useEffect(() => {
    if (courses) {
      setFilteredCourses(courses);
      // onFilter(courses); // Update parent component with all courses initially
    }
  }, [courses]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Function to receive filtered courses from FilterSidebar component
  const handleFilteredCourses = (filteredData) => {
    setFilteredCourses(filteredData);
  };

  return (
    <>
      <div className="w-11/12 pt-4">
        {/* <GetYouStarted /> */}
        <div className="grid-rows mt-20 grid w-full lg:grid-cols-[30%,70%]">
          <div className="lg:ml-2">
            <FilterSidebar onFilter={handleFilteredCourses} /> {/* Pass handler as prop */}
          </div>
          <div className="ml-5 lg:ml-5">
            <AllCoursesList courses={filteredCourses} /> {/* Pass filteredCourses as prop */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
