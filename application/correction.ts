import tape = require('tape')
import {difference} from 'lodash';
import exercice1 from './exercice1';
import {languages} from './exercice1';

tape("yolo", test => {
    test.deepEqual(exercice1(languages), ['C#', 'Java', 'Javascript'], "Yolo c'est bon");
    test.end();
});

tape("yolo3", test => {
    test.equal(difference(exercice1(languages), ['C#', 'Java', 'Javascript']).length, 0, "Yolo c'est bon aze zae");
    test.equal(difference(exercice1(languages), ['C#', 'Java', 'Javascript']).length, 0, "Yolo c'est bon ffsf");
    test.end();
});