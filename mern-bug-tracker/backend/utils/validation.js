const validateBug = (bugData) => {
  const errors = [];
  
  if (!bugData.title || bugData.title.trim().length < 3) {
    errors.push('Title must be at least 3 characters');
  }
  
  if (!bugData.description || bugData.description.trim().length < 10) {
    errors.push('Description must be at least 10 characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

module.exports = { validateBug };