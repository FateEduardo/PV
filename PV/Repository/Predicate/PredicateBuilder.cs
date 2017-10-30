using System;
using System.Linq.Expressions;

namespace pv.Repository.Predicate
{
    public static class PredicateBuilder
    {
        public static Expression<Func<T, bool>> True<T>() { return param => true; }   
        
        public static Expression<Func<T, bool>> False<T>() { return param => false; }    
    
        /// <summary>    
        /// Creates a predicate expression from the specified lambda expression.    
        /// </summary>    
        public static Expression<Func<T, bool>> Create<T>(Expression<Func<T, bool>> predicate) { return predicate; }    
    
        /// <summary>    
        /// Combines the first predicate with the second using the logical "and".    
        /// </summary>    
        public static Expression<Func<T, bool>> And<T>(this Expression<Func<T, bool>> first, Expression<Func<T, bool>> second)
        {
            return first;
        }    
    
        /// <summary>    
        /// Combines the first predicate with the second using the logical "or".    
        /// </summary>    
        public static Expression<Func<T, bool>> Or<T>(this Expression<Func<T, bool>> first, Expression<Func<T, bool>> second)
        {
            return first;
        }    
    
    }
}