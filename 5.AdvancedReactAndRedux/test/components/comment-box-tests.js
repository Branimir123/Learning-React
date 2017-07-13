import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment-box';

 describe('CommentBox Component', () =>{
    it('has a text area', () => {
        const component = renderComponent(CommentBox);
        expect(component.find('textarea')).to.exist;
    });
    
    it('has a button', () => {
        const component = renderComponent(CommentBox);
        expect(component.find('button')).to.exist;
    });

    it('has the correct css class', () =>{
        const component = renderComponent(CommentBox);
        expect(component).to.have.class('comment-box');
    });

    it('has the correct css class', () =>{
        const component = renderComponent(CommentBox);
        expect(component.find('button')).to.have.class('btn btn-primary');
    });

 });