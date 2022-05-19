import { MdKeyboardArrowRight } from 'react-icons/md';

export default function Sidebar() {
	return (
		<div className="w-1/4 h-screen sticky top-0 pt-[100px] gb-gray-400 font-bold flex flex-col items-center justify-around bg-gray-100">
			<div className="flex flex-col justify-between items-center h-2/5 w-full px-[60px]">
				<div className="flex items-center justify-between w-full text-lg px-20 py-5 hover:bg-gray-200 hover:rounded-2xl cursor-pointer">
					Explore <MdKeyboardArrowRight className="scale-[1.5]" />
				</div>
				<div className="flex items-center justify-between w-full text-lg px-20 py-5 hover:bg-gray-200 hover:rounded-2xl cursor-pointer">
					Categories <MdKeyboardArrowRight className="scale-[1.5]" />
				</div>
				<div className="flex items-center justify-between w-full text-lg px-20 py-5 hover:bg-gray-200 hover:rounded-2xl cursor-pointer">
					Saved <MdKeyboardArrowRight className="scale-[1.5]" />
				</div>
			</div>
			<div>
				<div>Current Book Listening</div>
				<div className="w-[200px] h-[50px] bg-slate-400">s</div>
			</div>
		</div>
	);
}
