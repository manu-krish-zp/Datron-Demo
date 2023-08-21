import RoundedAvatar from '@/app/components/RoundedAvatar';
import { render, screen } from '@testing-library/react';
describe("Rounded Avatar",() => { 
    it('should render given username',() => { 
        render(<RoundedAvatar userName='A'></RoundedAvatar>)
        const avatar=screen.getByTestId("avatar")
        expect(avatar).toHaveTextContent("A")
        
     })
 })