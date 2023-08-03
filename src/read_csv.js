'use strict';

import fs from 'fs';
import {parse} from 'csv-parse';

const filePath = 'data/kepler_data.csv';
const habitablePlanets = [];

const isHabitablePlanet = (planet) => {
  return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}


fs.createReadStream(filePath)
  .pipe(parse({
    comment: '#',
    columns: true,
  }))
  .on('data', (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on('error', (err) => {
    console.error(`[Error] : ${err}`);
  })
  .on('end', () => {
    console.log(habitablePlanets.map((planet) => planet.kepler_name));
    console.log(`${habitablePlanets.length} habitable planets found!`);
  });

