import React from 'react'
import PropTypes from 'prop-types'

const Contact = props => {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-white mt-10 mb-5">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
			<div className="">Any kind of information fell free to contract.</div>
		</div>
		<img src="https://i.ibb.co/XDSHBTK/2710477-1.png" alt="" className="p-6 h-52 md:h-64 w-[80%]" />
	</div>
	<form novalidate="" className="space-y-6">
		<div>
			<label for="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full border  p-3 rounded " />
		</div>
		<div>
			<label for="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 border  rounded " />
		</div>
		<div>
			<label for="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 border  rounded "></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-primary text-white ">Send Message</button>
	</form>
</div>
  )
}

Contact.propTypes = {}

export default Contact