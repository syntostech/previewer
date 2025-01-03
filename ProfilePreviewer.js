// ProfilePreviewer.js
import { useState } from 'react';
import TwitterPreview from './TwitterPreview';
import InstagramPreview from './InstagramPreview';
import './profile-styles.css';

const ProfilePreviewer = () => {
  const [platform, setPlatform] = useState('instagram');
  const [profileData, setProfileData] = useState({
    username: 'username',
    displayName: 'Display Name',
    bio: 'Your bio here',
    posts: '0',
    followers: '0',
    following: '0',
    website: 'yourwebsite.com',
    joinedDate: 'June 2009',
    isVerified: false
  });

  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'profile') {
          setProfileImage(reader.result);
        } else {
          setBannerImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <h2 className="text-2xl font-bold">Profile Preview Generator</h2>
      
      <div className="platform-buttons">
        <button 
          onClick={() => setPlatform('instagram')}
          className={`platform-button ${platform === 'instagram' ? 'active' : 'inactive'}`}
        >
          Instagram Style
        </button>
        <button 
          onClick={() => setPlatform('twitter')}
          className={`platform-button ${platform === 'twitter' ? 'active' : 'inactive'}`}
        >
          Twitter Style
        </button>
      </div>

      <div className="input-section">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Profile Picture</label>
            <input
              type="file"
              onChange={(e) => handleImageUpload(e, 'profile')}
              accept="image/*"
              className="input-field"
            />
          </div>
          
          {platform === 'twitter' && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">Banner Image</label>
                <input
                  type="file"
                  onChange={(e) => handleImageUpload(e, 'banner')}
                  accept="image/*"
                  className="input-field"
                />
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="isVerified"
                    checked={profileData.isVerified}
                    onChange={handleCheckboxChange}
                    className="form-checkbox"
                  />
                  <span>Verified Account</span>
                </label>
              </div>
            </>
          )}
        </div>

        <div className="space-y-2 mt-4">
          {/* Form inputs */}
          <input
            type="text"
            name="displayName"
            value={profileData.displayName}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Display Name"
          />
          {/* Add all other input fields here */}
        </div>
      </div>

      <div className="preview-section">
        <h3 className="text-lg font-bold mb-4">Preview</h3>
        {platform === 'twitter' ? (
          <TwitterPreview 
            profileData={profileData}
            profileImage={profileImage}
            bannerImage={bannerImage}
          />
        ) : (
          <InstagramPreview 
            profileData={profileData}
            profileImage={profileImage}
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePreviewer;
