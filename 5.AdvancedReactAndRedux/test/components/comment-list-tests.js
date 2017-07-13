import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment-list';

 describe('CommentList Component', () =>{
    let component;

    beforeEach(() => {
        component = renderComponent(CommentList);
    });
  
    describe('sub-elements existance', () => {
        it('has an unordered list element', () => {
            expect(component.find('ul')).to.exist;
        });

        it('shows an li for each comment', () => {
            expect(component.find('div')).to.exist;
        });
    });

   
 });