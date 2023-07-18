import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div>
      <div className='flex h-screen bg-gray-50 dark:bg-gray-900'>
        {/* Desktop sidebar */}
        <aside className='z-20 hidden w-64 flex-shrink-0 overflow-y-auto bg-white dark:bg-gray-800 md:block'>
          <div className='py-4 text-gray-500 dark:text-gray-400'>
            <a className='ml-6 text-lg font-bold text-gray-800 dark:text-gray-200' href='#'>
              Windmill
            </a>
            <ul className='mt-6'>
              <li className='relative px-6 py-3'>
                <span
                  className='absolute inset-y-0 left-0 w-1 rounded-br-lg rounded-tr-lg bg-purple-600'
                  aria-hidden='true'
                />
                <a
                  className='inline-flex w-full items-center text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:text-gray-100 dark:hover:text-gray-200'
                  href='index.html'
                >
                  <svg
                    className='h-5 w-5'
                    aria-hidden='true'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
                  </svg>
                  <span className='ml-4'>Dashboard</span>
                </a>
              </li>
            </ul>
            <ul>
              <li className='relative px-6 py-3'>
                <a
                  className='inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
                  href='forms.html'
                >
                  <svg
                    className='h-5 w-5'
                    aria-hidden='true'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' />
                  </svg>
                  <span className='ml-4'>Forms</span>
                </a>
              </li>
              <li className='relative px-6 py-3'>
                <a
                  className='inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
                  href='cards.html'
                >
                  <svg
                    className='h-5 w-5'
                    aria-hidden='true'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                  </svg>
                  <span className='ml-4'>Cards</span>
                </a>
              </li>
              <li className='relative px-6 py-3'>
                <a
                  className='inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
                  href='charts.html'
                >
                  <svg
                    className='h-5 w-5'
                    aria-hidden='true'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z' />
                    <path d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z' />
                  </svg>
                  <span className='ml-4'>Charts</span>
                </a>
              </li>
              <li className='relative px-6 py-3'>
                <a
                  className='inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
                  href='buttons.html'
                >
                  <svg
                    className='h-5 w-5'
                    aria-hidden='true'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122' />
                  </svg>
                  <span className='ml-4'>Buttons</span>
                </a>
              </li>
              <li className='relative px-6 py-3'>
                <a
                  className='inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
                  href='modals.html'
                >
                  <svg
                    className='h-5 w-5'
                    aria-hidden='true'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' />
                  </svg>
                  <span className='ml-4'>Modals</span>
                </a>
              </li>
              <li className='relative px-6 py-3'>
                <a
                  className='inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
                  href='tables.html'
                >
                  <svg
                    className='h-5 w-5'
                    aria-hidden='true'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M4 6h16M4 10h16M4 14h16M4 18h16' />
                  </svg>
                  <span className='ml-4'>Tables</span>
                </a>
              </li>
              <li className='relative px-6 py-3'>
                <button
                  className='inline-flex w-full items-center justify-between text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
                  aria-haspopup='true'
                >
                  <span className='inline-flex items-center'>
                    <svg
                      className='h-5 w-5'
                      aria-hidden='true'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' />
                    </svg>
                    <span className='ml-4'>Pages</span>
                  </span>
                  <svg className='h-4 w-4' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <template x-if='isPagesMenuOpen' />
              </li>
            </ul>
            <div className='my-6 px-6'>
              <button className='focus:shadow-outline-purple flex w-full items-center justify-between rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none active:bg-purple-600'>
                Create account
                <span className='ml-2' aria-hidden='true'>
                  +
                </span>
              </button>
            </div>
          </div>
        </aside>
        <div className='flex w-full flex-1 flex-col'>
          <header className='z-10 bg-white py-4 shadow-md dark:bg-gray-800'>
            <div className='container mx-auto flex h-full items-center justify-between px-6 text-purple-600 dark:text-purple-300'>
              {/* Mobile hamburger */}
              <button
                className='focus:shadow-outline-purple -ml-1 mr-5 rounded-md p-1 focus:outline-none md:hidden'
                aria-label='Menu'
              >
                <svg className='h-6 w-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              {/* Search input */}
              <div className='flex flex-1 justify-center lg:mr-32'>
                <div className='relative mr-6 w-full max-w-xl focus-within:text-purple-500'>
                  <div className='absolute inset-y-0 flex items-center pl-2'>
                    <svg className='h-4 w-4' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <input
                    className='dark:focus:shadow-outline-gray focus:shadow-outline-purple form-input w-full rounded-md border-0 bg-gray-100 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 focus:border-purple-300 focus:bg-white focus:placeholder-gray-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:placeholder-gray-600'
                    type='text'
                    placeholder='Search for projects'
                    aria-label='Search'
                  />
                </div>
              </div>
              <ul className='flex flex-shrink-0 items-center space-x-6'>
                {/* Theme toggler */}
                <li className='flex'>
                  <button
                    className='focus:shadow-outline-purple rounded-md focus:outline-none'
                    aria-label='Toggle color mode'
                  >
                    <template x-if='!dark' />
                    <template x-if='dark' />
                  </button>
                </li>
                {/* Notifications menu */}
                <li className='relative'>
                  <button
                    className='focus:shadow-outline-purple relative rounded-md align-middle focus:outline-none'
                    aria-label='Notifications'
                    aria-haspopup='true'
                  >
                    <svg className='h-5 w-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
                    </svg>
                    {/* Notification badge */}
                    <span
                      aria-hidden='true'
                      className='absolute right-0 top-0 inline-block h-3 w-3 -translate-y-1 translate-x-1 transform rounded-full border-2 border-white bg-red-600 dark:border-gray-800'
                    />
                  </button>
                  <template x-if='isNotificationsMenuOpen' />
                </li>
                {/* Profile menu */}
                <li className='relative'>
                  <button
                    className='focus:shadow-outline-purple rounded-full align-middle focus:outline-none'
                    aria-label='Account'
                    aria-haspopup='true'
                  >
                    <img
                      className='h-8 w-8 rounded-full object-cover'
                      src='https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82'
                      alt=''
                      aria-hidden='true'
                    />
                  </button>
                  <template x-if='isProfileMenuOpen' />
                </li>
              </ul>
            </div>
          </header>
          <main className='h-full overflow-y-auto'>
            <div className='container mx-auto grid px-6'>
              <h2 className='my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>Dashboard</h2>
              {/* Cards */}
              <div className='mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
                {/* Card */}
                <div className='shadow-xs flex items-center rounded-lg bg-white p-4 dark:bg-gray-800'>
                  <div className='mr-4 rounded-full bg-orange-100 p-3 text-orange-500 dark:bg-orange-500 dark:text-orange-100'>
                    <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
                    </svg>
                  </div>
                  <div>
                    <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>Tổng số khách hàng</p>
                    <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>6389</p>
                  </div>
                </div>
                {/* Card */}
                <div className='shadow-xs flex items-center rounded-lg bg-white p-4 dark:bg-gray-800'>
                  <div className='mr-4 rounded-full bg-green-100 p-3 text-green-500 dark:bg-green-500 dark:text-green-100'>
                    <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>
                    <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>Tổng Doanh thu</p>
                    <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>46,760.89 VNĐ</p>
                  </div>
                </div>
                {/* Card */}
                <div className='shadow-xs flex items-center rounded-lg bg-white p-4 dark:bg-gray-800'>
                  <div className='mr-4 rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-blue-100'>
                    <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
                    </svg>
                  </div>
                  <div>
                    <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>Sản phẩm</p>
                    <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>376</p>
                  </div>
                </div>
                {/* Card */}
                <div className='shadow-xs flex items-center rounded-lg bg-white p-4 dark:bg-gray-800'>
                  <div className='mr-4 rounded-full bg-teal-100 p-3 text-teal-500 dark:bg-teal-500 dark:text-teal-100'>
                    <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>
                    <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>Pending contacts</p>
                    <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>35</p>
                  </div>
                </div>
              </div>
              {/* New Table */}
              <div className='shadow-xs w-full overflow-hidden rounded-lg'>
                <div className='w-full overflow-x-auto'>
                  <table className='whitespace-no-wrap w-full'>
                    <thead>
                      <tr className='border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400'>
                        <th className='px-4 py-3'>Client</th>
                        <th className='px-4 py-3'>Amount</th>
                        <th className='px-4 py-3'>Status</th>
                        <th className='px-4 py-3'>Date</th>
                      </tr>
                    </thead>
                    <tbody className='divide-y bg-white dark:divide-gray-700 dark:bg-gray-800'>
                      <tr className='text-gray-700 dark:text-gray-400'>
                        <td className='px-4 py-3'>
                          <div className='flex items-center text-sm'>
                            {/* Avatar with inset shadow */}
                            <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                              <img
                                className='h-full w-full rounded-full object-cover'
                                src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                alt=''
                                loading='lazy'
                              />
                              <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                            </div>
                            <div>
                              <p className='font-semibold'>Hans Burger</p>
                              <p className='text-xs text-gray-600 dark:text-gray-400'>10x Developer</p>
                            </div>
                          </div>
                        </td>
                        <td className='px-4 py-3 text-sm'>$ 863.45</td>
                        <td className='px-4 py-3 text-xs'>
                          <span className='rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100'>
                            Approved
                          </span>
                        </td>
                        <td className='px-4 py-3 text-sm'>6/10/2020</td>
                      </tr>
                      <tr className='text-gray-700 dark:text-gray-400'>
                        <td className='px-4 py-3'>
                          <div className='flex items-center text-sm'>
                            {/* Avatar with inset shadow */}
                            <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                              <img
                                className='h-full w-full rounded-full object-cover'
                                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6'
                                alt=''
                                loading='lazy'
                              />
                              <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                            </div>
                            <div>
                              <p className='font-semibold'>Jolina Angelie</p>
                              <p className='text-xs text-gray-600 dark:text-gray-400'>Unemployed</p>
                            </div>
                          </div>
                        </td>
                        <td className='px-4 py-3 text-sm'>$ 369.95</td>
                        <td className='px-4 py-3 text-xs'>
                          <span className='rounded-full bg-orange-100 px-2 py-1 font-semibold leading-tight text-orange-700 dark:bg-orange-600 dark:text-white'>
                            Pending
                          </span>
                        </td>
                        <td className='px-4 py-3 text-sm'>6/10/2020</td>
                      </tr>
                      <tr className='text-gray-700 dark:text-gray-400'>
                        <td className='px-4 py-3'>
                          <div className='flex items-center text-sm'>
                            {/* Avatar with inset shadow */}
                            <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                              <img
                                className='h-full w-full rounded-full object-cover'
                                src='https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                alt=''
                                loading='lazy'
                              />
                              <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                            </div>
                            <div>
                              <p className='font-semibold'>Sarah Curry</p>
                              <p className='text-xs text-gray-600 dark:text-gray-400'>Designer</p>
                            </div>
                          </div>
                        </td>
                        <td className='px-4 py-3 text-sm'>$ 86.00</td>
                        <td className='px-4 py-3 text-xs'>
                          <span className='rounded-full bg-red-100 px-2 py-1 font-semibold leading-tight text-red-700 dark:bg-red-700 dark:text-red-100'>
                            Denied
                          </span>
                        </td>
                        <td className='px-4 py-3 text-sm'>6/10/2020</td>
                      </tr>
                      <tr className='text-gray-700 dark:text-gray-400'>
                        <td className='px-4 py-3'>
                          <div className='flex items-center text-sm'>
                            {/* Avatar with inset shadow */}
                            <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                              <img
                                className='h-full w-full rounded-full object-cover'
                                src='https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                alt=''
                                loading='lazy'
                              />
                              <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                            </div>
                            <div>
                              <p className='font-semibold'>Rulia Joberts</p>
                              <p className='text-xs text-gray-600 dark:text-gray-400'>Actress</p>
                            </div>
                          </div>
                        </td>
                        <td className='px-4 py-3 text-sm'>$ 1276.45</td>
                        <td className='px-4 py-3 text-xs'>
                          <span className='rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100'>
                            Approved
                          </span>
                        </td>
                        <td className='px-4 py-3 text-sm'>6/10/2020</td>
                      </tr>
                      <tr className='text-gray-700 dark:text-gray-400'>
                        <td className='px-4 py-3'>
                          <div className='flex items-center text-sm'>
                            {/* Avatar with inset shadow */}
                            <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                              <img
                                className='h-full w-full rounded-full object-cover'
                                src='https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                alt=''
                                loading='lazy'
                              />
                              <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                            </div>
                            <div>
                              <p className='font-semibold'>Wenzel Dashington</p>
                              <p className='text-xs text-gray-600 dark:text-gray-400'>Actor</p>
                            </div>
                          </div>
                        </td>
                        <td className='px-4 py-3 text-sm'>$ 863.45</td>
                        <td className='px-4 py-3 text-xs'>
                          <span className='rounded-full bg-gray-100 px-2 py-1 font-semibold leading-tight text-gray-700 dark:bg-gray-700 dark:text-gray-100'>
                            Expired
                          </span>
                        </td>
                        <td className='px-4 py-3 text-sm'>6/10/2020</td>
                      </tr>
                      <tr className='text-gray-700 dark:text-gray-400'>
                        <td className='px-4 py-3'>
                          <div className='flex items-center text-sm'>
                            {/* Avatar with inset shadow */}
                            <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                              <img
                                className='h-full w-full rounded-full object-cover'
                                src='https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b8377ca9f985d80264279f277f3a67f5'
                                alt=''
                                loading='lazy'
                              />
                              <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                            </div>
                            <div>
                              <p className='font-semibold'>Dave Li</p>
                              <p className='text-xs text-gray-600 dark:text-gray-400'>Influencer</p>
                            </div>
                          </div>
                        </td>
                        <td className='px-4 py-3 text-sm'>$ 863.45</td>
                        <td className='px-4 py-3 text-xs'>
                          <span className='rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100'>
                            Approved
                          </span>
                        </td>
                        <td className='px-4 py-3 text-sm'>6/10/2020</td>
                      </tr>
                      <tr className='text-gray-700 dark:text-gray-400'>
                        <td className='px-4 py-3'>
                          <div className='flex items-center text-sm'>
                            {/* Avatar with inset shadow */}
                            <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                              <img
                                className='h-full w-full rounded-full object-cover'
                                src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                alt=''
                                loading='lazy'
                              />
                              <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                            </div>
                            <div>
                              <p className='font-semibold'>Maria Ramovic</p>
                              <p className='text-xs text-gray-600 dark:text-gray-400'>Runner</p>
                            </div>
                          </div>
                        </td>
                        <td className='px-4 py-3 text-sm'>$ 863.45</td>
                        <td className='px-4 py-3 text-xs'>
                          <span className='rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100'>
                            Approved
                          </span>
                        </td>
                        <td className='px-4 py-3 text-sm'>6/10/2020</td>
                      </tr>
                      <tr className='text-gray-700 dark:text-gray-400'>
                        <td className='px-4 py-3'>
                          <div className='flex items-center text-sm'>
                            {/* Avatar with inset shadow */}
                            <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                              <img
                                className='h-full w-full rounded-full object-cover'
                                src='https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                alt=''
                                loading='lazy'
                              />
                              <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                            </div>
                            <div>
                              <p className='font-semibold'>Hitney Wouston</p>
                              <p className='text-xs text-gray-600 dark:text-gray-400'>Singer</p>
                            </div>
                          </div>
                        </td>
                        <td className='px-4 py-3 text-sm'>$ 863.45</td>
                        <td className='px-4 py-3 text-xs'>
                          <span className='rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100'>
                            Approved
                          </span>
                        </td>
                        <td className='px-4 py-3 text-sm'>6/10/2020</td>
                      </tr>
                      <tr className='text-gray-700 dark:text-gray-400'>
                        <td className='px-4 py-3'>
                          <div className='flex items-center text-sm'>
                            {/* Avatar with inset shadow */}
                            <div className='relative mr-3 hidden h-8 w-8 rounded-full md:block'>
                              <img
                                className='h-full w-full rounded-full object-cover'
                                src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                alt=''
                                loading='lazy'
                              />
                              <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
                            </div>
                            <div>
                              <p className='font-semibold'>Hans Burger</p>
                              <p className='text-xs text-gray-600 dark:text-gray-400'>10x Developer</p>
                            </div>
                          </div>
                        </td>
                        <td className='px-4 py-3 text-sm'>$ 863.45</td>
                        <td className='px-4 py-3 text-xs'>
                          <span className='rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100'>
                            Approved
                          </span>
                        </td>
                        <td className='px-4 py-3 text-sm'>6/10/2020</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='grid border-t bg-gray-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:grid-cols-9'>
                  <span className='col-span-3 flex items-center'>Showing 21-30 of 100</span>
                  <span className='col-span-2' />
                  {/* Pagination */}
                  <span className='col-span-4 mt-2 flex sm:mt-auto sm:justify-end'>
                    <nav aria-label='Table navigation'>
                      <ul className='inline-flex items-center'>
                        <li>
                          <button
                            className='focus:shadow-outline-purple rounded-md rounded-l-lg px-3 py-1 focus:outline-none'
                            aria-label='Previous'
                          >
                            <svg aria-hidden='true' className='h-4 w-4 fill-current' viewBox='0 0 20 20'>
                              <path
                                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                                clipRule='evenodd'
                                fillRule='evenodd'
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button className='focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none'>
                            1
                          </button>
                        </li>
                        <li>
                          <button className='focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none'>
                            2
                          </button>
                        </li>
                        <li>
                          <button className='focus:shadow-outline-purple rounded-md border border-r-0 border-purple-600 bg-purple-600 px-3 py-1 text-white transition-colors duration-150 focus:outline-none'>
                            3
                          </button>
                        </li>
                        <li>
                          <button className='focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none'>
                            4
                          </button>
                        </li>
                        <li>
                          <span className='px-3 py-1'>...</span>
                        </li>
                        <li>
                          <button className='focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none'>
                            8
                          </button>
                        </li>
                        <li>
                          <button className='focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none'>
                            9
                          </button>
                        </li>
                        <li>
                          <button
                            className='focus:shadow-outline-purple rounded-md rounded-r-lg px-3 py-1 focus:outline-none'
                            aria-label='Next'
                          >
                            <svg className='h-4 w-4 fill-current' aria-hidden='true' viewBox='0 0 20 20'>
                              <path
                                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                clipRule='evenodd'
                                fillRule='evenodd'
                              />
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </span>
                </div>
              </div>
              {/* Charts */}
              <h2 className='my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>Charts</h2>
              <div className='mb-8 grid gap-6 md:grid-cols-2'>
                <div className='shadow-xs min-w-0 rounded-lg bg-white p-4 dark:bg-gray-800'>
                  <h4 className='mb-4 font-semibold text-gray-800 dark:text-gray-300'>Revenue</h4>
                  <canvas id='pie' />
                  <div className='mt-4 flex justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400'>
                    {/* Chart legend */}
                    <div className='flex items-center'>
                      <span className='mr-1 inline-block h-3 w-3 rounded-full bg-blue-500' />
                      <span>Shirts</span>
                    </div>
                    <div className='flex items-center'>
                      <span className='mr-1 inline-block h-3 w-3 rounded-full bg-teal-600' />
                      <span>Shoes</span>
                    </div>
                    <div className='flex items-center'>
                      <span className='mr-1 inline-block h-3 w-3 rounded-full bg-purple-600' />
                      <span>Bags</span>
                    </div>
                  </div>
                </div>
                <div className='shadow-xs min-w-0 rounded-lg bg-white p-4 dark:bg-gray-800'>
                  <h4 className='mb-4 font-semibold text-gray-800 dark:text-gray-300'>Traffic</h4>
                  <canvas id='line' />
                  <div className='mt-4 flex justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400'>
                    {/* Chart legend */}
                    <div className='flex items-center'>
                      <span className='mr-1 inline-block h-3 w-3 rounded-full bg-teal-600' />
                      <span>Organic</span>
                    </div>
                    <div className='flex items-center'>
                      <span className='mr-1 inline-block h-3 w-3 rounded-full bg-purple-600' />
                      <span>Paid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
