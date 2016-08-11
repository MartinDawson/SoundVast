﻿using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Repository;
using SoundVast.Filters;
using SoundVast.Models.IdentityModels;
using System.Linq.Expressions;
using SoundVast.Models;

namespace SoundVast.ServiceLayer
{
    public interface IRatingService<T> where T : Rating
    {
        ICollection<T> GetRatings();
        bool Add(RatingCount ratingCount, T newRating, T existingRating, bool liked);
    }

    public class RatingService<T> : IRatingService<T> where T : Rating
    {
        private readonly IValidationDictionary _validationDictionary;
        private readonly IRepository<T> _repository;

        public RatingService(IValidationDictionary validationDictionary, IRepository<T> repository)
        {
            _validationDictionary = validationDictionary;
            _repository = repository;
        }

        protected bool Validate(T rating)
        {
            return _validationDictionary.IsValid;
        }

        public ICollection<T> GetRatings()
        {
            return _repository.GetAll().ToList();
        }

        private void ModifyRating(RatingCount ratingCount, bool liked, RatingValue value)
        {
            if (liked)
            {
                ratingCount.ModifyLike(value);
            }
            else
            {
                ratingCount.ModifyDislike(value);
            }
        }

        public bool Add(RatingCount ratingCount, T newRating, T existingRating, bool liked)
        {
            //Rating already exists 
            if (existingRating != null)
            {
                //Delete the rating
                _repository.Remove(existingRating);

                if (existingRating.Liked == liked)
                {
                    //If the user clicked on the same button again then remove the like or dislike
                    ModifyRating(ratingCount, liked, RatingValue.Decrement);
                }
                //User clicked on the other button but the like/dislike also exists for that so remove it
                else
                {
                    ModifyRating(ratingCount, !liked, RatingValue.Decrement);
                }
                _repository.Save();
            }

            //If user clicked on the other rating or none have been clicked
            if (existingRating?.Liked != liked)
            {
                ModifyRating(ratingCount, liked, RatingValue.Increment);

                if (!Validate(newRating))
                    return false;

                _repository.Add(newRating);
            }
            return true;
        }

        public void HandleRating(ApplicationUser user)
        {

        }
    }
}