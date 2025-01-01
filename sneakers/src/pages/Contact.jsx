import React from 'react'
import ContactDetail from '../components/ContactDetail'
import TextInput from '../components/TextInput'
import RadioInput from '../components/RadioInput'
import { FaEnvelope, FaEnvelopeOpen, FaLocationDot, FaPhone } from 'react-icons/fa6'


const Contact = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            {/* Left Section */}
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src="https://pagedone.io/asset/uploads/1696488602.png"
                    alt="Contact Us"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-red-500"
                  />
                  <h1 className="font-manrope text-white text-4xl font-bold absolute top-11 left-11">
                    Contact Us
                  </h1>
                  <div className="absolute bottom-0 w-full lg:p-11 p-5">
                    <div className="bg-white rounded-lg p-6">
                      <ContactDetail
                        icon={
                          <FaPhone className='text-red-500' />
                        }
                        text="470-601-1911"
                      />
                      <ContactDetail
                        icon={
                          <FaEnvelopeOpen className="text-red-500" />
                        }
                        text="https://veilmail.io/irish-geoff"
                        href="#"
                      />
                      <ContactDetail
                        icon={
                          <FaLocationDot className="text-red-500" />
                        }
                        text="654 Sycamore Avenue, Meadowville, WA 76543"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-red-600 font-manrope text-4xl font-semibold mb-11">
                Send Us A Message
              </h2>
              <TextInput placeholder="Name" />
              <TextInput placeholder="Email" />
              <TextInput placeholder="Phone" />
              <div className="mb-10">
                <h4 className="text-gray-500 text-lg mb-4">
                  Preferred method of communication
                </h4>
                <div className="flex">
                  <RadioInput id="email" label="Email" name="communication" />
                  <RadioInput id="phone" label="Phone" name="communication" />
                </div>
              </div>
              <TextInput placeholder="Message" />
              <button className="w-full h-12 text-white font-semibold rounded-full transition-all duration-700 bg-red-500 hover:bg-red-600 shadow-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </form>
  )
}

export default Contact
