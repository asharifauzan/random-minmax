function validateParams({min, max, double}) {
  const errors = [];
  
  // validate: params are either int or float
  if (isNaN(min)) errors.push(new Error("min property must be either float or integer"));
  if (isNaN(max)) errors.push(new Error("max property must be either float or integer"));

  // validate: params value are given with proper value
  if (min > max) errors.push(new Error("min cannot be greater than max property"));
  if (min === max) errors.push(new Error("min and max property value cannot be equivalent"));

  // validate: double must be a boolean
  if (typeof double !== "boolean") errors.push(new Error("double property must be either true of false"));

  return errors;
}

function getRandomMinMax(constraints) {
  try {
    // set default props value
    const defaultProps = {
      min: 0,
      max: 1,
      double: false,
    }

    // override defaultProps with props given
    const userProps = Object.assign({}, defaultProps, constraints);

    // validating the given props
    const errors = validateParams(userProps) || [];

    // throw all errors if exist
    if (errors.length > 0) {
      throw errors;
    }

    const { min, max, double } = userProps;

    const random    = Math.random();
    const parsedMin = parseFloat(min);
    const parsedMax = parseFloat(max);
    const result    = random * (parsedMax - parsedMin) + parsedMin;

    return double ? result.toFixed(2) : result;
  } catch(error) {
    throw error;
  }
}

module.exports = getRandomMinMax;