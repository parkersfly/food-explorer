import { Container, Search, Options } from './styles'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header' 

export function Menu(){
    return(
        <Container>
            <Header isAdmin/>
            
            <Options>

            </Options>
            <Footer />
        </Container>
    )
}