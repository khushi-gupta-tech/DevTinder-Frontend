import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;

  return (
    <div className="card bg-base-100 w-96 shadow-sm rounded-xl overflow-hidden">
      <figure className="h-72 overflow-hidden">
        <img
          src={photoUrl}
          alt={`${firstName} ${lastName}`}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">
          {firstName} {lastName}
        </h2>

        {age && gender && (
          <p className="text-sm opacity-80">
            {age} • {gender}
          </p>
        )}

        <p className="mt-2 text-sm leading-5">{about}</p>

        <div className="card-actions justify-between mt-4">
          <button className="btn btn-outline btn-sm">Ignore</button>
          <button className="btn btn-primary btn-sm">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
