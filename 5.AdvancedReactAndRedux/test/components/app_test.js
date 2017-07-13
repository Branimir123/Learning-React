import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App Component', () => {
    const component = renderComponent(App);
    beforeEach(function() {
      return renderComponent(App);
    });
   
    it('Shows the correct text', () => {   
      expect(component).to.contain('React simple starter');
    });

    it('Has the correct css class', () => {
      expect(component).to.have.class('intro');
    });
});


