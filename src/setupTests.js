// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
<<<<<<< HEAD
=======
import * as enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
enzyme.configure({ adapter: new Adapter() });
>>>>>>> 7c9fae24c5f06a459a976773e8883b728cb68b6e
