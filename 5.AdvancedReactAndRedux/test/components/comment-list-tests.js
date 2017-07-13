import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment-list';

 describe('CommentList Component', () =>{
    let component;
    let value = "Some dummy value";

    beforeEach(() => {
        component = renderComponent(CommentList, null, { comments: [{value}, {value}] });
    });
  
    describe('sub-elements existance', () => {
        it('has an unordered list element', () => {
            expect(component.find('ul')).to.exist;
        });

        it('shows an li for each comment', () => {
            expect(component.find('li').length).to.equals(2);
        });

        it('shows each comment that is provided', () => {
            expect(component).to.contain(value);
            expect(component).to.contain(value);    
         });
    });  
 });