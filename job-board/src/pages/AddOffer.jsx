import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import supabase from '../config/supabaseClient';
import RegistrationSuccess from './RegistrationSuccess';
import RegistrationFailure from './RegistrationFailure';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Select from 'react-select';

const AddOffer = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [content, setContent] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

  const typesOfXPList= [
    'Без опит',
    '3 месеца',
    '6 месеца',
    '1 година',
    '2 години',
    'Над 2 години',
    'Над 5 години',
    'Над 10 години',
  ]

  const bulgarianCities = [
    'София-Град',
    'София',
    'Пловдив',
    'Варна',
    'Бургас',
    'Русе',
    'Стара Загора',
    'Плевен',
    'Сливен',
    'Пазарджик',
    'Перник',
    'Добрич',
    'Шумен',
    'Велико Търново',
    'Хасково',
    'Благоевград',
    'Ямбол',
    'Враца',
    'Кюстендил',
    'Габрово',
    'Търговище',
    'Кърджали',
    'Видин',
    'Разград',
    'Силистра',
    'Ловеч',
    'Монтана',
    'Смолян'
  ];

  const industryOptionsList = [
    'Електроснабдяване и водоснабдяване',
    'Минно дело',
    'Петрол и газ',
    'Автомобили',
    'Потребителски стоки',
    'Продажби на дребно',
    'Промишлени стоки',
    'Фармацевтика',
    'Банки и капиталови пазари',
    'Застрахователни услуги и пенсионно осигуряване',
    'Недвижими имоти',
    'Управление на инвестиции',
    'Развлекателни услуги и медии',
    'Телекомуникации и информационни услуги',
    'Технологии',
    'Здравеопазване',
    'Инженерство',
    'Строителство и Архитектура',
    'Неправителствени организации',
    'Образование',
    'Организации с нестопанска цел',
    'Пощенски и куриерски услуги',
    'Правителство',
    'Транспорт',
    'Туризъм',
    'Друг',
  ];


  const optionsCities = bulgarianCities.map((city) => ({ value: city, label: city }));
  const industryOptions = industryOptionsList.map((industry) => ({ value: industry, label: industry }));
  const XPOptions = typesOfXPList.map((xp) => ({ value: xp, label: xp }));

  //console.log(optionsCities, industryOptions, XPOptions);

  const handleCityChange = (selectedOption) => {
    setLocation(selectedOption.value);
  };

  const handleIndustryChange = (selectedOption) => {
    setIndustry(selectedOption.value); 
    console.log(industry);
  };

  const handleXPChange = (selectedOption) => {
    setExperience(selectedOption.value);
    console.log(experience)
  };
  

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      
      border: '1px solid #e2e8f0', // border color
      borderRadius: '0.375rem', // border radius
      backgroundColor: 'white', // background color
      padding: '0rem', // padding
      boxShadow: state.isFocused ? '0 0 0 2px #2563eb' : null, // focus shadow
      '&:hover': {
        borderColor: state.isFocused ? '#2563eb' : '#a0aec0',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#4299e1' : 'white', // selected background color
      color: state.isSelected ? 'white' : '#1a202c',
      '&:hover': {
        backgroundColor: '#ebf4ff', // Change this to the desired hover background color
      },
    }),
  };

  // const [currentUser, setCurrentUser] = useState("");
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);
  const jwt = localStorage.getItem('accessToken');

  useEffect(() => {
    async function getUserData() {
      const { data, error } = await supabase.auth.getUser(jwt);
      if (data?.user) {
        setUserId(data.user.id);
      }
    }
  
    const fetchUser = async () => {
      // Wait for userId to be set
      if (userId) {
        const { data: user, error } = await supabase
          .from('users')
          .select()
          .eq('id', userId);
  
        if (user) {
          setUser(user[0]);
        }
      }
    };
  
    if (jwt) {
      // First, get user data from auth
      getUserData();
      
      // Then, fetch user data from the database
      fetchUser();
    }
  }, [jwt, userId, location, experience, industry]);  // Added userId as a dependency

  async function submitNewOffer() {
    if (!title || salary === null || !industry || !location) {
      console.error('Error: Title, salary, industry, and location cannot be null.');
      // Handle the error state, for example, show an error message to the user
      setErrorVisible(true);
      setTimeout(() => {
        setErrorVisible(false);
      }, 5000);
      return;
    }
    // getUserData()
    const date = new Date().toLocaleDateString();
    const { data, error } = await supabase
    .from('offers')
    .insert([
      {  
        title: title,
        created_at: date,
        author: user.company_name,
        summary: content,
        phone: user.phone,
        email: user.email,
        salary: salary || null,
        experience: experience, 
        industry: industry, 
        location: location, 
        content: content,
        author_id: user.id
      },
    ])

    if (error) {
      console.error('Error inserting new offer:', error);
      // Handle error state
    } else {
      console.log('New offer inserted successfully:', data);
      // Handle success state
      navigate('/offers');
    }
  }

  return (
    <div className='px-4'>
      <div className='m-auto max-w-6xl mt-12'>
          <h1 className='text-5xl font-semibold'><span className='text-[#0146b1]'>Създай</span> Обява</h1>
      </div>
    
    <div className='m-auto max-w-4xl bg-gray-100'>

    <div className='mt-10'>
        <div>
          <h3 className='mb-2 font-semibold'>Заглавие <span className='text-red-500'>*</span></h3>
          <div>
            <label
              htmlFor="Title"
              className="relative block overflow-hidden rounded-md border border-gray-100 bg-white px-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                value={title} onInput={e => setTitle(e.target.value)}
                type="text"
                id="Title"
                placeholder="Моля въведете заглавие..."
                className="peer h-8 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
            </label>

          </div>
        </div>
      </div>

      <div className='mt-4'>
        <div>
          <h3 className='mb-2 font-semibold'>Заплата <span className='text-xs'>(Полето може да бъде оставено празно)</span></h3>
          <div>
            <label
              htmlFor="Salary"
              className="relative block overflow-hidden rounded-md border border-gray-100 bg-white px-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                value={salary} onInput={e => setSalary(e.target.value)}
                type="number"
                id="Salary"
                placeholder="Моля въведете брутно или нетно възнаграждение..."
                className="peer h-8 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
            </label>

          </div>
        </div>

        <div className='mt-4'>

        <h3 className='mb-2 text-md font-semibold'>Опит <span className='text-red-500'>*</span></h3>

        <label
            htmlFor="Experience"
            // className="relative block overflow-hidden rounded-md border border-gray-100 bg-white px-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <Select
                id="Experience"
                onInput={e => setExperience(e.target.value)}
                value={console.log(XPOptions.value)}
                onChange={handleXPChange} 
                options={XPOptions} 
                placeholder="Избор..."
                styles={customStyles}
            />
          </label>
      </div>
      </div>

      <div className='mt-4'>
        <div>
          <h3 className='mb-2 font-semibold'>Бранш <span className='text-red-500'>*</span></h3>

          <label
            htmlFor="Industry"
            // className="relative block overflow-hidden rounded-md border border-gray-100 bg-white px-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <Select
                id="Industry"
                value={industryOptions.find(option => option.value === industry)}
                onChange={handleIndustryChange} 
                options={industryOptions} 
                placeholder="Избор..."
                styles={customStyles}
            />
          </label>

        </div>
      </div>

      <div className='mt-4'>
        <div>
          <h3 className='mb-2 font-semibold'>Локация <span className='text-red-500'>*</span></h3>
          <div>

            <label
              htmlFor="City"
              // className="relative block overflow-hidden rounded-md border border-gray-100 bg-white px-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <Select
                  id="City"
                  value={optionsCities.find(option => option.value === location)}
                  onChange={handleCityChange}
                  options={optionsCities}
                  placeholder="Избoр..."
                  styles={customStyles}
              />
            </label>

          </div>
        </div>
      </div>


      <div className='m-auto mt-10 bg-gray-100'>
          <h2 className='text-2xl font-semibold'>Oсновно съдаржание <span className='text-red-500'>*</span></h2>
      </div>

      <div className='m-auto max-w-5xl mt-5 p-4 bg-gray-100'>
      <CKEditor
          editor={ ClassicEditor }
          data="<p>Описание, на Вашата обява.</p>"
          // onReady={ editor => {
          //     // You can store the "editor" and use when it is needed.
          //     // console.log( 'Editor is ready to use!', editor );
          // } }
          // onClick={(event, editor) => {
          //   const data = editor.getData();
          //   setContent(data)
          // }}
          onChange={ ( event, editor ) => {
              const data = editor.getData();
              setContent(data);
              // console.log( { event, editor, data } );
          } }
          // onBlur={ ( event, editor ) => {
          //     console.log( 'Blur.', editor );
          // } }
          // onFocus={ ( event, editor ) => {
          //     console.log( 'Focus.', editor );
          // } }
      />
      </div>

      <div className='flex flex-row justify-center items-center w-[150px]'>
      <button onClick={submitNewOffer} type="button" className=" py-2 px-4 bg-[#0146b1] hover:scale-105 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg">
        Публикувай
      </button>
      </div>
      {errorVisible && (
      <h2 className='text-red-500 mt-2'>Моля попълнете всички задължителни полета отбелязани със * </h2>
      )}

     </div>
    </div>
  )
}

export default AddOffer