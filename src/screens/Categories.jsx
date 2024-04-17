import { useEffect } from 'react';
import FilterSidebar from '../components/categories/FilterSidebar';
import AllCoursesList from '../components/categories/AllCoursesList';
function Categories() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component is mounted
  }, []);

  return (
    <>
      <div className="w-11/12 pt-4">
        {/* <GetYouStarted /> */}
        <div className="grid-rows mt-20 grid w-full lg:grid-cols-[30%,70%]">
          <div className="lg:ml-2">
            <FilterSidebar />
          </div>
          <div className="ml-5 lg:ml-5">
            <AllCoursesList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
