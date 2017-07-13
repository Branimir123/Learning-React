import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App Component', () => {
    let component;

    beforeEach(function() {
      component = renderComponent(App);
    });
   
    it('sas the correct css class', () => {
      expect(component).to.have.class('intro');
    });

    it('shows a comment box', () => {
      expect(component.find('.comment-box')).to.exist;
    });

    it('shows a comment list', () =>{
      expect(component.find('.comment-list')).to.exist;
    });
});


