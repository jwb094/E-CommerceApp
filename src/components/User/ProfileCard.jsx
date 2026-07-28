import React from 'react';

function ProfileCard(props) {
    return (
        <section
        data-template="ProfileCard"
        data-view="default"
        className='c-profile-card'>
            <div className="container">
                <div className="c-profile-card-bloc |  flex flex-col justify-center | bg-gray-100 max-w-56 max-h-56 py-12 gap-6">
                    <div className="c-profile-card__img">
                         <img class="w-32 h-32 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile picture"></img>
                    </div>
                    <div className="c-profile-card__Content | flex justify-center">
                        <p>First Name - Last Name</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProfileCard;