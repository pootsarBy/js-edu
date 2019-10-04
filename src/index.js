/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 2}
    )  {
      const basicJsCourse = 500;
      const allJsCourse = 800;
      let lerningHours = 0;
      if (knowsProgramming == true)
        lerningHours = allJsCourse;
      else lerningHours = allJsCourse + basicJsCourse;
      lerningHours = lerningHours / config[focus]
      return Math.ceil(lerningHours);
  };
  