let pointInRectangle = ([x, y, xMin, xMax, yMin, yMax]) => {
      let position = 'outside';

      if (x <= xMax && x >= xMin && y <= yMax && y >= yMin) {
          position = 'inside';
      }

      return position;
};

console.log(pointInRectangle([8, -1, 2, 12, -3, 3]));