import { useEffect, useState } from "react";
import api from "../../api/api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Setting = () => {
  // const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [bio, setBio] = useState("");
  const [telegram, setTelegram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [social, setSocial] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = localStorage.getItem("user");
        if (user) {
          const userData = JSON.parse(user);
          const userId = userData[0].id;
          // setUserId(userId);
          // console.log("user Id", userId);
          const response = await api.get(`/user/${userId}`);
          setUser(response.data); // Update based on actual response structure
        }
      } catch (err) {
        setIsError(true);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setProfilePicture(user.profile_picture || "");
      setBio(user.bio || "");
      setTelegram(user.telegram || "");
      setLinkedin(user.linkedin || "");
      setFacebook(user.facebook || "");
    }
  }, [user]);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const updatedUserData = {
        name,
        email,
        phone,
        profile_picture: profilePicture,
        bio,
        telegram,
        linkedin,
        facebook,
      };

      // const response = await api.put(`/update-profile`, updatedUserData);
      // console.log("Updated user:", response.data);
      toast.success("Data Successfully Updated!");

      
      // Update local storage only for fields that are updated
      const storedUser = JSON.parse(localStorage.getItem('user'));
      const updatedUser = { ...storedUser[0], ...updatedUserData };
      localStorage.setItem('user', JSON.stringify([updatedUser]));

      navigate("/dashboard");

      // Optionally, update local state or perform any necessary actions upon successful update
    } catch (error) {
      console.error("Error updating user:", error);
      // Handle error state or notify the user
      toast.warn("Error in Updating your data");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className="flex flex-col justify-center min-h-full w-fit">
      <div className="md:border-gray-20 min-h-[70vh] w-full mt-11 lg:mx-10 flex flex-col rounded-lg md:border-2">
        <div className="flex flex-col md:flex-row items-start justify-start gap-10 px-2 sm:p-4 md:p-12">
          <p
            onClick={() => setSocial(true)}
            className={
              social
                ? "merb cursor-pointer border-b-2 border-[#025464] text-start text-[18px] font-semibold text-[#025464]"
                : "merb cursor-pointer text-start text-[18px] font-semibold text-gray-400"
            }
          >
            My Account
          </p>
          <p
            onClick={() => setSocial(false)}
            className={
              !social
                ? "merb cursor-pointer border-b-2 border-[#025464] text-start text-[18px] font-semibold text-[#025464]"
                : "merb cursor-pointer text-start text-[18px] font-semibold text-gray-400"
            }
          >
            Social Links
          </p>
        </div>
        {social ? (
          <div>
            <p className="m-12 text-[35px] text-[#187498]">My Account</p>
            <div className="mt-10 flex flex-col items-center justify-center lg:justify-between lg:px-32 md:flex-row">
              <div>
                <form
                  onSubmit={handleUpdateUser}
                  className="grid w-full gap-x-10 gap-y-4 py-2 pb-5 grid-cols-1 justify-center items-center"
                >
                  <div className="flex flex-col gap-1 mx-2">
                    <label className="text-[#6F6D6D] font-medium">Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full outline-none focus:outline-none border-[#187498] border-1.5 min-w-[250px] mx-2 rounded-lg lg:min-w-[300px] max-w-[400px] lg:max-w-[500px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1 mx-2">
                    <label className="text-[#6F6D6D] font-medium">Phone</label>
                    <input
                      type="text"
                      placeholder="+251 9...."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full outline-none focus:outline-none border-[#187498] border-1.5 min-w-[250px] mx-2 rounded-lg lg:min-w-[300px] max-w-[400px] lg:max-w-[500px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1 mx-2">
                    <label className="text-[#6F6D6D] font-medium">Email</label>
                    <input
                      type="text"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full outline-none focus:outline-none border-[#187498] border-1.5 min-w-[250px] mx-2 rounded-lg lg:min-w-[300px] max-w-[400px] lg:max-w-[500px]"
                    />
                  </div>
                  <div className="flex justify-between items-center mx-4">
                    <div className="flex flex-col justify-start items-start gap-3">
                      <p>
                        <span className="bg-[yellow] font-medium">Profile</span>{" "}
                        Picture
                      </p>
                      <input
                        type="file"
                        onChange={(e) => setProfilePicture(e.target.files[0])}
                        className="bg-white"
                      />
                      <div className="flex flex-col py-2">
                        <label className="py-2 text-sm uppercase">Bio</label>
                        <textarea
                          className="flex border-2 sm:mx-6 border-secondary p-3 focus:text-gray-800 w-full md:w-auto mx-5 min-w-[250px] md:min-w-[300px] lg:min-w-[350px] xl:min-w-[400px]"
                          rows={4}
                          type="text"
                          name="Subject"
                          placeholder="Your Bio"
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="flex flex-col md:flex-row gap-10 justify-center md:justify-between items-center">
                      <button
                          type="submit"
                          className="hover:bg-green mt-4 bg-primary p-2 text-white hover:font-semibold hover:text-white flex justify-start item-end px-10"
                        >
                          Save Changes
                        </button> 
                        <Link to="/update-password"
                        title="To update password click here this will take you another page"
                          className="hover:bg-green mt-4 bg-primary p-2 text-white hover:font-semibold hover:text-white flex justify-start item-end px-10"
                        >
                          Update Password
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center justify-between mx-2 sm:mx-6 md:mx-12 lg:px-32 overflow-x-hidden md:flex-row">
            <div>
              <p className="m-12 text-[35px] text-[#187498]">Social LInks</p>
              <form onSubmit={handleUpdateUser} className="mx-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-start items-start gap-10">
                  {/* Continue from the previous snippet */}
                  <div className="flex flex-col gap-1 mx-2">
                    <label className="text-[#6F6D6D] font-medium">
                      Facebook
                    </label>
                    <input
                      type="text"
                      value={facebook}
                      onChange={(e) => setFacebook(e.target.value)}
                      className="w-full outline-none focus:outline-none border-[#187498] border-1.5 min-w-[250px] mx-2 rounded-lg lg:min-w-[300px] max-w-[400px] lg:max-w-[500px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1 mx-2">
                    <label className="text-[#6F6D6D] font-medium">
                      LinkedIn
                    </label>
                    <input
                      type="text"
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      className="w-full outline-none focus:outline-none border-[#187498] border-1.5 min-w-[250px] mx-2 rounded-lg lg:min-w-[300px] max-w-[400px] lg:max-w-[500px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1 mx-2">
                    <label className="text-[#6F6D6D] font-medium">
                      Telegram
                    </label>
                    <input
                      type="text"
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value)}
                      className="w-full outline-none focus:outline-none border-[#187498] border-1.5 min-w-[250px] mx-2 rounded-lg lg:min-w-[300px] max-w-[400px] lg:max-w-[500px]"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-[#025464] px-6 py-1 my-8"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setting;
