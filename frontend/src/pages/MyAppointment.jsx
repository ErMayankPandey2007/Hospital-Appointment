import React, { useContext } from 'react'

import { Appcontext } from '../context/Appcontext';

export default function MyAppointmnet() {

	const { doctors } = useContext(Appcontext);
	return (
		<>
			<div>
				<p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
				<div>
					{doctors.slice(0, 2).map((item, index) => (
						<div className='grid gap-4 grid-cols-[1fr_2fr] sm:flex sm:gap-6 py-2 border-b border-b-zinc-300' key={index}>
							<div>
								<img className='w-40 md:w-32 bg-indigo-100 rounded-lg' src={item.image} alt="" />
							</div>
							<div className='flex-1 text-sm text-zinc-600'>
								<p className='text-neutral-800 font-semibold'>{item.name}</p>
								<p>{item.speciality}</p>
								<p className='text-zinc-700 font-semibold mt-1'>Address:</p>
								<p className='text-xs '>{item.address.line1}</p>
								<p className='text-xs '>{item.address.lin2}</p>
								<p className='text-xs mt-2'><span className='text-xs text-neutral-900 font-medium'>Date & Time</span> 23,Oct,2025 | 12:44 PM</p>
							</div>
							<div></div>
							<div className='flex flex-col gap-2 justify-end'>
								<button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded-xl hover:bg-[#5f6fff] hover:text-white cursor-pointer transition-all duration-300'>Pay Online</button>
								<button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded-xl hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300'>Cancel Appointment</button>
							</div>
						</div>
					))}
				</div>
			</div>

		</>
	)
}
