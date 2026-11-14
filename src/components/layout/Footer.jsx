import React from 'react';
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

            </ul>
          </div>

          {/* Employers */}
          <div>


            <ul className="mt-4 space-y-3 text-sm">

            </ul>
          </div>

          {/* Company */}
          <div>


            <ul className="mt-4 space-y-3 text-sm">

            </ul>
          </div>

          {/* Legal */}
          <div>


            <ul className="mt-4 space-y-3 text-sm">

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
