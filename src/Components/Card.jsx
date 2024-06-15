/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { data } from 'autoprefixer';
import React from 'react';

function Card({ title, content, truncatedContent, author, views, imageUrl, avatarUrl}=data) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
     { imageUrl && <img
        src={imageUrl}
        alt="Forest in Fog"
        className="w-full"
      /> }
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{content}</p>
        <p className="text-gray-500 text-sm mb-4">{truncatedContent}</p>
        <div className="flex items-center">
          <img
            src={avatarUrl}
            alt="Avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-gray-700">{author}</span>
          <span className="text-gray-500 ml-2">{views ? `• ${views} views` : ''}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;