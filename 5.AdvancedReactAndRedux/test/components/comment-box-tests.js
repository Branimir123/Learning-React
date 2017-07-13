import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment-box';

 describe('CommentBox Component', () =>{
    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });
  
    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });
    
    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('css', () => {
        it('has the correct css class', () =>{
            expect(component).to.have.class('comment-box');
        });

        it('button has the correct css class', () =>{
            expect(component.find('button')).to.have.class('btn btn-primary');
        });
    });

    describe('entering text', () => {
        let value = "some dummy value";
        beforeEach(() => {
            component.find('textarea').simulate('change', `${value}`);
        });

        it('shows text that is entered', () => {
            expect(component.find('textarea')).to.have.value(`${value}`);
        });

        it('clears the input when submitted', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
 });