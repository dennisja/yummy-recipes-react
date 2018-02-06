import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const adapter = Enzyme.configure({ adapter: new Adapter() });

export default adapter;
