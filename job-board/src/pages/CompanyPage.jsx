import React from 'react'
import ScrollToTop from '../components/ScrollToTop';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit, CheckSquare, Trash, CheckCircle } from 'react-feather';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import supabase from '../config/supabaseClient';
const { pathname } = window.location;

const CompanyPage = () => {
  const [lastPath, setLastPath] = useState('defaultPath');
  const [loggedInUser, setLoggedInUser] = useState('');
  const jwt = localStorage.getItem('accessToken');
  const [user, setUser] = useState('');
  const [offers, setOffers] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(user.info); 
  const [isInfoEditing, setIsInfoEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState({
    company: user.company_name,
    location: user.location,
    industry: user.industry,
    created_at: user.created_at,
    phone: user.phone,
    email: user.email
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [offerSlug, setOfferSlug] = useState('');
  
  const handleImageChange = async (event) => {
    const image = event.target.files[0];
    setSelectedImage(image);
    
    if (image) {
      try {
        // Upload the image to Supabase Storage
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('profile_pictures')
          .upload(`${loggedInUser.id}/${image.name}`, image);
  
        if (uploadError) {
          throw new Error(`Error uploading image: ${uploadError.message}`);
        }
  
        // Log the structure of the uploadData object
        // console.log('Upload Data:', uploadData);
  
        // Get the URL of the uploaded image
        const imageUrl = await supabase.storage
          .from('profile_pictures')
          .getPublicUrl(`${loggedInUser.id}/${image.name}`);
  
        if (!imageUrl) {
          throw new Error('Image URL is null or undefined');
        }
        
        // Update the user's record in the database with the new image URL
        const { data: updateData, error: updateError } = await supabase
          .from('users')
          .update({ profile_image_url: imageUrl.data.publicUrl })
          .eq('id', loggedInUser.id);
  
        if (updateError) {
          throw new Error(`Error updating user record: ${updateError.message}`);
        }

        setSelectedImage(imageUrl.data.publicUrl);
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    setEditedText(editedText);
  };

  const handleInfoEditClick = () => {
    setIsInfoEditing(!isInfoEditing);
    setEditedInfo({
      company: user.company_name,
      location: user.location,
      industry: user.industry,
      created_at: user.created_at,
      phone: user.phone,
      email: user.email
    });
  }

  const handleInfoSaveClick = async () => {
    const { data, error } = await supabase
      .from('users')
      .update({
        company_name: editedInfo.company,
        location: editedInfo.location,
        industry: editedInfo.industry,
        created_at: editedInfo.created_at,
        phone: editedInfo.phone,
        email: editedInfo.email
      })
      .eq("id", lastPath)
      .select();
  
    if (error) {
      console.error('Error saving info:', error);
    } else {
      setIsInfoEditing(false);
      // Fetch user data again after saving
      fetchUserData(lastPath);
    }
  };

  const fetchUserData = async (path) => {
    const { data: users, error } = await supabase
      .from('users')
      .select()
      .eq('id', path);

    if (users && users.length > 0) {
      setUser(users[0]);
    }
  };
  
  const handleSaveClick = async () => {

    const { data, error } = await supabase
      .from('users')
      .update({
        info: editedText
      })
      .eq("id", lastPath)
      .select()

    if (error) {
      console.error('Error saving text:', error);
    } else {
      setIsEditing(false);
    }
  };

  useEffect(() => {
    if (user.info) {
      setEditedText(user.info);
    }

  }, [user.info]);

  useEffect(() => {
    async function getLoggedInUser() {
      if (jwt) {
        const { data, error } = await supabase.auth.getUser(jwt);
        if (data?.user) {
          setLoggedInUser(data.user);
        }
      }
    }
    
    if (jwt) {
      getLoggedInUser(); // Call the async function
    }
    
  }, [jwt]);

  useEffect(() => {
    const paths = window.location.pathname.split("/").filter(entry => entry !== "");
    const lastPath = paths[paths.length - 1];
    setLastPath(lastPath);

    const fetchUser = async () => {
      const { data: users, error } = await supabase
        .from('users')
        .select()
        .eq('id', lastPath);

      if (users && users.length > 0) {
        setUser(users[0]);
        fetchAllOffers(users[0]);
      }
    };

    fetchUser();
  }, [lastPath]);
  
  const fetchAllOffers = async (user) => {
    const { data, error } = await supabase
      .from('offers')
      .select('*')
      .eq('email', user.email)
  
    if (error) {
      setFetchError('Could not fetch the offers');
      setOffers(null);
    }
  
    if (data) {
      setOffers(data);
      setFetchError(null);
    }
  };

  // Delete Offer
  const deleteOffer = async (offerSlug) => {
    console.log('Deleting offer with slug:', offerSlug);
    try {
      const { data, error } = await supabase
        .from('offers')
        .delete()
        .eq('slug', offerSlug);
  
      if (error) {
        console.error('Error deleting offer:', error);
      } else {
        console.log('Offer deleted successfully:', data);
        fetchAllOffers(user);
      }
    } catch (error) {
      console.error('Unexpected error during offer deletion:', error);
    }
  };

  return (
    <div id="CompanyPage" className="m-auto mt-10 max-w-6xl bg-gray-100">
      <ScrollToTop/>
      {/* PopUp */}
      {/* <div className='h-screen flex flex-row justify-center items-center absolute bg-gray-400 opacity-50'>
      <div role="alert" className="duration-200 rounded-xl border border-gray-100 bg-white p-4 shadow-xl opacity-100">
                   <div className="flex items-start gap-4">
          
                    <div className="flex-1">
                    <strong className="block font-medium text-gray-900">Сигурни ли сте че искате да изтриете обявата?</strong>

                    <div>
                      <button className='mx-1 text-white bg-[#0852bf] px-2 py-1 rounded-md transition ease-in duration-200'>Не</button>
                      <button className='mx-1 bg-red-500 text-white rounded-md px-2 py-1 hover:bg-red-600 hover:scale-105 transition ease-in duration-200 cursor-pointer'>Да, премахване на обява</button>
                    </div>
                    </div>
                </div>
          </div>
          </div> */}
        <div className="bg-white rounded-lg shadow-xl pb-8">
            <div className="w-full h-[250px]">
                <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg" />
            </div>
            <div className="flex flex-col items-center -mt-20">
                {/* <img src="https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png" className="w-40 border-4 border-white rounded-full" /> */}
                <label htmlFor="profile-pic-upload">
                <div
                  className="w-40 h-40 border-4 border-white rounded-full overflow-hidden"
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <img
                    src={selectedImage || user.profile_image_url || 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'}
                    alt="Profile"
                    style={{
                      cursor: loggedInUser.id === user.id ? "pointer" : "default",
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      filter: isHovered && loggedInUser.id === user.id ? 'blur(2px)' : 'none',
                      transition: 'filter 0.3s ease',
                    }}
                  />
                  {isHovered && loggedInUser.id === user.id ? (
                    <div
                      style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Edit size={30} color="white" />
                    </div>
                  ) : null}
                </div>
              </label>
              { loggedInUser.id === user.id && (
                <input
                  id="profile-pic-upload"
                  type="file"
                  accept="image/jpeg, image/png, image/gif, image/svg+xml"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              )}
                <div className="flex items-center space-x-2 mt-2">
                    <p className="text-2xl font-semibold">{user.company_name}</p>
                    <span className="bg-blue-500 rounded-full p-1" title="Verified">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </span>
                </div>
                <p className="text-gray-700">{user.industry}</p>
                <p className="text-sm text-gray-500">{user.location}</p>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row mt-5 bg-gray-100">
          <div className="bg-white rounded-lg shadow-xl p-8 sm:mr-4 max-h-80 sm:top-5 sm:sticky">
            <div className="flex flex-row justify-between items-center">
              <h4 className="text-xl text-gray-900 font-bold">Кратка информация</h4>
              {loggedInUser.id === user.id && (
              <button
                type="button"
                onClick={isInfoEditing ? handleInfoSaveClick : handleInfoEditClick}
                className="scale-90 w-1/6 p-2 flex justify-center items-center shadow-md hover:scale-100 transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
              >
                {isInfoEditing ? <CheckSquare className='text-black'/> : <Edit className='text-black' />}
              </button>
              )}
            </div>
               {isInfoEditing ? (
                <div>
                <ul className="mt-2 text-gray-700">
                  <li className="flex border-y py-2">
                    <span className="font-bold w-24">Компания:</span>
                    <input
                      type="text"
                      value={editedInfo.company}
                      onChange={(e) => setEditedInfo({ ...editedInfo, company: e.target.value })}
                      className="border-0 border-b border-gray-500 p-0 m-0 outline-none  focus:ring-0 bg-transparent text-gray-700"
                    />
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Локация:</span>
                    <input
                      type="text"
                      value={editedInfo.location}
                      onChange={(e) => setEditedInfo({ ...editedInfo, location: e.target.value })}
                      className="border-0 border-b border-gray-500 p-0 m-0 outline-none  focus:ring-0 bg-transparent text-gray-700"
                    />
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Бранш:</span>
                    <input
                      type="text"
                      value={editedInfo.industry}
                      onChange={(e) => setEditedInfo({ ...editedInfo, industry: e.target.value })}
                      className="border-0 border-b border-gray-500 p-0 m-0 outline-none  focus:ring-0 bg-transparent text-gray-700"
                    />
                  </li>
                  {/* <li className="flex border-b py-2">
                    <span className="font-bold w-24">Телефон:</span>
                    <input
                      type="text"
                      value={editedInfo.phone}
                      onChange={(e) => setEditedInfo({ ...editedInfo, phone: e.target.value })}
                      className="border-0 border-b border-gray-500 p-0 m-0 outline-none  focus:ring-0 bg-transparent text-gray-700"
                    />
                  </li> */}
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Email:</span>
                    <input
                      type="email"
                      value={editedInfo.email}
                      onChange={(e) => setEditedInfo({ ...editedInfo, email: e.target.value })}
                      className="border-0 border-b border-gray-500 p-0 m-0 outline-none  focus:ring-0 bg-transparent text-gray-700"
                    />
                  </li>
                </ul>
                </div>
                ) : (
                  <div>
                    <ul className="mt-2 text-gray-700">
                      <li className="flex border-y py-2">
                        <span className="font-bold w-24">Компания:</span>
                        <span className="text-gray-700">{user.company_name}</span>
                      </li>
                      <li className="flex border-b py-2">
                        <span className="font-bold w-24">Локация:</span>
                        <span className="text-gray-700">{user.location}</span>
                      </li>
                      <li className="flex border-b py-2">
                        <span className="font-bold w-24">Бранш:</span>
                        <span className="text-gray-700">{user.industry}</span>
                      </li>
                      {/* <li className="flex border-b py-2">
                        <span className="font-bold w-24">Дата на основаване:</span>
                        <span className="text-gray-700">{user.created_at}</span>
                      </li> */}
                      <li className="flex border-b py-2">
                        <span className="font-bold w-24">Телефон:</span>
                        <span className="text-gray-700">{user.phone}</span>
                      </li>
                      <li className="flex border-b py-2">
                        <span className="font-bold w-24">Email:</span>
                        <span className="text-gray-700">{user.email}</span>
                      </li>
                    </ul>
                  </div>
                )}
            </div>

        <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
          <div className="flex flex-row justify-between items-center">
            <h4 className="text-xl text-gray-900 font-bold">Информация</h4>
            <div>
            {loggedInUser.id === user.id ? (
               isEditing ? (
              <button
                onClick={handleSaveClick}
                class="scale-90 w-[35px] p-2 flex justify-center items-center shadow-md hover:scale-100 transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
                >
                <CheckSquare/>
              </button>
            ) : (
              <button
                onClick={handleEditClick}
                className="scale-90 w-[35px] p-2 flex justify-center items-center shadow-md hover:scale-100 transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
                >
                <Edit/>
              </button>
              )
            ) : null}
            </div>
          </div>
          {isEditing ? (
            <CKEditor
              editor={ClassicEditor}
              data={editedText}
              onChange={(event, editor) => {
                const data = editor.getData();
                setEditedText(data);
              }}
            />
          ) : editedText ? (
            <p className="mt-2 text-gray-700" dangerouslySetInnerHTML={{ __html: editedText }}></p>
          ) : (
            <p className="mt-2 text-gray-700" dangerouslySetInnerHTML={{ __html: user.info }}></p>
          )}
        </div>
        
        </div>

        <div className="bg-white rounded-lg shadow-xl mt-4 p-8">
          <h4 className="text-xl text-gray-900 font-bold">Публикувани Обяви</h4>
          <div className="">
              {/* <OffersCard/> */}
          {fetchError && (<p>{fetchError}</p>)}
            {offers && (
              <div className="offers">
                <div className="offers-grid">
                  {offers.map(offer => (

                    <article key={offer.id} className="my-4 rounded-xl border-2 border-gray-100 bg-white shadow-sm trasition duration-200 hover:scale-[101%] hover:shadow-md">
                    <div className="flex flex-row justify-between items-start gap-4 p-4 sm:p-6 lg:p-8">
                        <div>
                          <h3 className="font-medium sm:text-lg">
                            <Link to={`/offers/${offer.slug}`}  className="hover:underline">
                            {offer.title}
                            </Link>
                          </h3>
            
                          <p className="line-clamp-2 text-sm text-gray-700" 
                            dangerouslySetInnerHTML={{ __html: offer.summary }}>
                          </p>

            
                          <div className="mt-2 sm:flex sm:items-center sm:gap-2">

                            {offer.salary && (
                            <span className="whitespace-nowrap font-semibold rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-white" >
                              {offer.salary} лв
                            </span>
                            )
                            }

                            <span className="ml-0.5 whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-white" >
                            {offer.experience} 
                            </span>
            
                            {/* <span className="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-white" >
                            </span>  */}
            
            
                          <span className="hidden sm:block" aria-hidden="true">&middot;</span>
            
                          <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                              Публикувано от 
                            <a href="#" className="ml-1 font-medium underline hover:text-gray-700">
                              {offer.author}
                            </a>
                          </p>            
                      </div>
                    </div>
                    <div>
                    {loggedInUser.id === user.id && (
                    <Trash
                      className='bg-red-500 text-white rounded-md p-1 w-8 h-8 hover:bg-red-600 hover:scale-105 transition ease-in duration-200 cursor-pointer'
                      onClick={() => deleteOffer(offer.slug)}>
                    </Trash>
                    )}
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Link to={`/offers/${offer.slug}`} className="items-center text-white bg-[#0852bf] transition ease-in duration-200 px-2 py-2 text-sm cursor-pointer mb-5 mr-5 rounded-xl font-semibold hover:shadow-xl">
                      Свържи се
                    </Link>
                  </div>
                </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default CompanyPage