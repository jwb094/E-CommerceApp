import React from 'react';
import { Link } from "react-router";
function Footer(props) {
    return (
     <footer className="bg-stone-200 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

          {/* Job Seekers */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              BrightBuy
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              {/* <li><Link to="#" className="text-gray-600 hover:text-gray-900">Search Jobs</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Browse Categories</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Browse Companies</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Saved Jobs</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Applied Jobs</Link></li> */}
            </ul>
          </div>

          {/* Employers */}
          <div>
            {/* <h3 className="text-sm font-semibold text-gray-900">
              Employers
            </h3> */}

            <ul className="mt-4 space-y-3 text-sm">
              {/* <li><Link to="#" className="text-gray-600 hover:text-gray-900">Post a Job</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Employer Dashboard</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Recruitment Solutions</Link></li> */}
            </ul>
          </div>

          {/* Company */}
          <div>
            {/* <h3 className="text-sm font-semibold text-gray-900">
              Company
            </h3> */}

            <ul className="mt-4 space-y-3 text-sm">
              {/* <li><Link to="#" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link to="#"className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">FAQs</Link></li> */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            {/* <h3 className="text-sm font-semibold text-gray-900">
              Legal
            </h3> */}

            <ul className="mt-4 space-y-3 text-sm">
              {/* <li><Link to="#"className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Cookie Policy</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">Accessibility</Link></li> */}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-100 pt-6 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Bright Buy. All rights reserved.
          </p>

      
        </div>
      </div>
    </footer>
    );
}

export default Footer;