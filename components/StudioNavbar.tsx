import { ArrowUturnLeftIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import React from 'react';

function StudioNavbar(props: any) {
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="flex-none">
					<Link href={'/'}>
						<button className="btn btn-xs btn-square btn-ghost">
							<ArrowUturnLeftIcon className="text-sm" />
						</button>
					</Link>
				</div>
				<div className="flex-1">
					<a className="btn btn-ghost text-xl">Blog.</a>
				</div>
			</div>
			<>{props.renderDefault(props)}</>
		</div>
	);
}

export default StudioNavbar;
